<template>
	<view style="margin-top: 40px">

    <b><h2 style="text-align: center; ">我的</h2></b>
    <view style="width: 100%;height: 40px"></view>

    <view style="padding: 40px">
      <u-avatar size="80px" :src="src"></u-avatar>
      <b><h1>管理员名称</h1></b>
    </view>

    <view>
     <b> <u--text margin="40px" color="#000" size="16px" text="用户管理"></u--text></b>
      <u-line hairline="true" color="#d6d7d9" margin="-25px 0px"></u-line>
    </view>

    <view style="padding: 40px">
      <u-cell-group :border="false" >
        <u-cell
            title="用户查询"
            isLink
            url="/pages/componentsB/tag/tag"
        ></u-cell>
      </u-cell-group>


    </view>

    <view style="padding: 40px;margin-top: -60px">

      <u-cell-group :border="false" >
        <u-cell
            title="权限修改"
            isLink
            url="/pages/componentsB/tag/tag"
        ></u-cell>
      </u-cell-group>
    </view>

    <view style="padding: 40px; margin-top: -60px">

      <u-cell-group :border="false" >
        <u-cell
            title="反馈中心"
            isLink
            url="/pages/componentsB/tag/tag"
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
        src: 'https://cdn.uviewui.com/uview/album/1.jpg'
			}
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
