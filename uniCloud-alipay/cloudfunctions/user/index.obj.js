// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj

const { log } = require("console");

// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
module.exports = {
	_before: function () { // 通用预处理器

	},
	/**
	 * method1方法描述
	 * @param {string} param1 参数1描述
	 * @returns {object} 返回值描述
	 */
	/* 
	
	method1(param1) {
		// 参数校验，如无参数则不需要
		if (!param1) {
			return {
				errCode: 'PARAM_IS_NULL',
				errMsg: '参数不能为空'
			}
		}
		// 业务逻辑
		
		// 返回结果
		return {
			param1 //请根据实际需要返回值
		}
	}
	*/
   
     async register(user){
		const  {username,password,phone}=user
		if(!username||!password){
			return false;
		}
	   const db = uniCloud.database();
	   const count=  await  db.collection("user").where({
		   username:username,
		   password:password
	   }).limit(1).count()
	   const res=count.total>0
	   console.log("res",res)
	   
		if(res){
			return {
				code:-1,
				msg:"用户已经注册"
				
			};
		}
		 await db.collection("user").add({
			username:username,
			password:password,
			phone:phone
		})
		
	   return {
			code:0,
	        msg: "注册成功"
	   }
	   
	   
   },
   async login(username,password){
	   const db = uniCloud.database();
	   var {total} = await db.collection("user").where({
	   		   username:username,
	   		   password:password
	   }).count()
	   const res=total>0
	   return {
		   code:res?0:-1,
		   msg:res?"登陆成功":"账号或密码错误"
		   
	   }
   }
}
