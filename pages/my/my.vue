<template>
	<view style="margin-top: 40px">

    <b><h2 style="text-align: center; ">我的</h2></b>
    <view style="width: 100%;height: 40px"></view>

    <view style="padding: 40px">
      <u-avatar size="80px" :src="src"></u-avatar>
      <b><h1>{{ userInfo.username }}</h1></b>
    </view>

    <view style="padding: 40px; height: 30px" v-if="userInfo.role===0">
      <h2>收益统计</h2>
      <u-text>{{Math.random()*10000}}</u-text>
    </view>

    <view>
     <b> <u--text margin="40px" color="#000" size="16px" :text="userInfo.role===0?'我的服务':'用户管理'"></u--text></b>
      <u-line hairline="true" color="#d6d7d9" margin="-25px 0px"></u-line>
    </view>

    <view style="padding: 40px" >
      <u-cell-group :border="false" >
        <u-cell v-for="item in serviceList[userInfo.role]"
            :title="item.title"
            isLink
        ></u-cell>
      </u-cell-group>


    </view>

<!--<tabbar ></tabbar>-->
	</view>
</template>

<script>
	export default {
		data() {
			return {
        userInfo:{},
        serviceList:[

          [
            {
              title:"购买记录",
            },
            {
              title:"在线客服",
            } ,{
            title:"个人信息",
          }
          ],
          [
            {
              title:"用户查询",
            },
            {
              title:"权限修改",
            } ,{
            title:"反馈中心",
          }

          ]





        ],
          //管理员





        src: 'https://cdn.uviewui.com/uview/album/1.jpg'
			}
		},
    onLoad() {

      this.userInfo=uni.getStorageSync("userInfo");
      console.log(this.userInfo)
    },
		methods: {
			
		}
	}
</script>

<style>
h1 {
  margin: -60px 0px 0px 92px;
  font-size: 20px;
}

</style>
