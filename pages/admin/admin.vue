<template>
  <view style="margin-top: 10px">

    <view style="padding: 40px">
      <u-avatar size="100px" :src="src"></u-avatar>
      <b><h1>用户名</h1></b>
    </view>

    <view style="padding: 40px; height: 30px">
      <h2>收益统计</h2>
      <u--textarea v-model="value1" placeholder="请输入内容" ></u--textarea>
    </view>

    <view>
      <b> <u--text margin="40px" color="#000" size="16px" text="我的服务"></u--text></b>
      <u-line hairline="true" color="#d6d7d9" margin="-25px 0px"></u-line>
    </view>

    <view style="padding: 40px">
      <u-cell-group :border="false" >
        <u-cell
            title="购买记录"
            isLink
            url="/pages/componentsB/tag/tag"
        ></u-cell>
      </u-cell-group>


    </view>

    <view style="padding: 40px;margin-top: -60px">

      <u-cell-group :border="false" >
        <u-cell
            title="在线客服"
            isLink
            url="/pages/componentsB/tag/tag"
        ></u-cell>
      </u-cell-group>
    </view>

    <view style="padding: 40px; margin-top: -60px">

      <u-cell-group :border="false" >
        <u-cell
            title="个人信息"
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
      src: 'https://cdn.uviewui.com/uview/album/1.jpg',
      value1: ''
    }
  },
  methods: {}
}
</script>

<style>
h1 {
  margin: -70px 0px 0px 115px;
  font-size: 20px;
}
h2 {
  font-size: 18px;
}
.u-textarea {
  width: 150px;
  height: 50px;
  position: absolute;
  left: 108px;
  top: -40px;
}
</style>
