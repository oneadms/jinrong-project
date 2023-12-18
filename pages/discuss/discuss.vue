<template>
	<view style="margin-top: 40px">

    <b><h2 style="text-align: center; ">xxx股票讨论区</h2></b>
    <view style="width: 100%;height: 40px"></view>
    <u-search
        height="38px"
        placeholder="搜索"></u-search>

    <view style="padding: 20px">
      <u-avatar size="60px" :src="src" shape="square"></u-avatar>
      <h1>用户名</h1>
      <p>发表时间</p>



    </view>



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
  position: relative;
  top: -50px;
  left: 65px;
}
p {
  position: relative;
  top: -45px;
  left: 65px;
}
</style>
