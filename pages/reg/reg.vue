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
    <u-notify ref="uNotify" ></u-notify>
  </view>

</template>

<script>
const user = uniCloud.importObject('user')
import {md5} from "js-md5";
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
      var encryption={
        username: this.form.username,
        password:  md5(this.form.password)
      }
      user.register(encryption).then(resp=>{
        console.log(resp);
        const {code,msg}=resp
        if (code === 0) {
          this.$refs.uNotify.show({
            top: 10,
            type: 'success',
            color: '#000',
            bgColor: '#e8e8e8',
            message: msg,
            duration: 1000 * 3,
            fontSize: 20,
            safeAreaInsetTop:true
          })
        }else{
          this.$refs.uNotify.show({
            top: 10,
            type: 'error',
            color: '#000',
            bgColor: '#e8e8e8',
            message: msg,
            duration: 1000 * 3,
            fontSize: 20,
            safeAreaInsetTop:true
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">

</style>