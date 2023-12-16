<template>
  <view style="margin-top: 40px;">
    <b><h1 style="text-align: center; ">注册账号</h1></b>
    <view style="width: 100%;height: 40px"></view>

    <u--input

        style="margin-top: 50px;"
        placeholder="请输入账号："
        border="bottom"
        v-model="form.username"
        clearable
    ></u--input>
    <view style="width: 100%;height: 70px"></view>
    <u--input
        v-model="form.password"
        style="margin-top: 60px;"
        placeholder="请输入密码："
        border="bottom"
        clearable
        type="password"
    ></u--input>
    <view style="width: 100%;height: 70px"></view>
    <u--input
        v-model="form.phone"
        style="margin-top: 80px;"
        placeholder="请输入手机号："
        border="bottom"
        clearable
        maxlength="11"
    ></u--input>

    <view style="width: 100%;height: 30px"></view>
    <view style="padding: 55px">
      <u-button  type="success" size="large" text="确认" @click="register"></u-button>
    </view>

  </view>

</template>

<script>
const user = uniCloud.importObject('user')
export default {
  data() {
    return {
      form:{
        username:'',
        password:'',
        phone:''
      }
    }
  },
  methods: {
    change(e) {
      console.log('change', e);
    },
    register(){

      user.register(this.form).then(resp=>{
        console.log(resp);
        uni.showToast({
          title: resp?"注册成功":"注册失败，用户已经存在"
        })
      })
    }
  }
}
</script>

<style lang="scss">

</style>