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
		   username:username
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
			phone:phone,
			role:0
		})
		
	   return {
			code:0,
	        msg: "注册成功"
	   }
	   
	   
   },
   async login(username,password){
	   const db = uniCloud.database();
	   const  {data}= await db.collection("user").where({
	   		   username:username,
	   		   password:password
	   }).get({
		   getOne:true
	   })
	   
	   const userList=data;
	   
	   if (userList && userList.length > 0) {
		   let user = userList[0];
		   var userId = user._id;
		   const {id} = await db.collection("user_token").add({
			   user_id:userId
		   })
		   return {
			   code:0,
			   msg: "登陆成功",
			   data:{
				   token:id
			   }
		   }
	   }
	   return {
		   code:-1,
		   msg: "账号或密码错误"
	   }


   },

   async userInfo(token){
	   const db = uniCloud.database();
	   var {data} =await db.collection("user_token").where(
		   {
			   _id:token
		   }
	   ).get({
		   getOne:true
	   });
	   if (!data && data.length <= 0) {
		   return {
			   code:-1,
			   msg:"token无效"
		   }
	   }
	   let userId = data[0].user_id;
	   let resp = await db.collection('user').doc(userId).get();
	   const userInfo=resp.data[0]
	   return {
		   code:0,
		   msg:"获取成功",
		   data: {username:userInfo.username,role:userInfo.role}

	   }

   }
}
