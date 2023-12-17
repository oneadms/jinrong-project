<template>
  <view style="margin-top: 40px;">
    <b><h1 style="text-align: center; ">小小理财</h1></b>

    <view style="width: 100%;height: 25px"></view>

    <view style="padding: 40px">
      <u--input
          v-model="form.username"
          style="margin-top: 50px;"
          placeholder="请输入手机号码："
          border="surround"
          clearable
          maxlength="11"
      ></u--input>
    </view>


  <view style="width: 100%; padding-left: 50px; margin-top: -30px" >
    <u-radio-group
        size="20px"
        iconSize="20px"
        v-model="radiovalue1"
        placement="row"
        @change="groupChange"

    >
      <u-radio
          labelSize="12px"
          :customStyle="{marginBottom: '8px'}"
          v-for="(item, index) in radiolist1"
          :key="index"
          :label="item.name"
          :name="item.name"
          @change="radioChange"

      >
      </u-radio>
    </u-radio-group>
  </view>

    <view style="padding: 40px;margin-top: -15px;">
      <u--input
          type="password"
          v-model="form.password"
          placeholder="请输入密码："
          border="surround"
          clearable
          maxlength="11"
      ></u--input>
    </view>

    <view style="width: 100%;height: 10px"></view>
    <view style="padding: 85px; margin-top: -100px">
      <u-button  type="primary" size="large" text="登录" @click="login"></u-button>
    </view>

    <view style="padding: 85px; margin-top: -150px">
      <u-button  type="success" size="large" text="注册" @click="register"></u-button>
    </view>
    <u-notify ref="uNotify" ></u-notify>


  </view>
</template>

<script>
import {md5} from "js-md5";

const user = uniCloud.importObject('user')
export default {
  data() {
    return {
      form:{
        username:'',
        password:''
      },
      value: '',
      // 基本案列数据
      radiolist1: [{
        name: '管理员',
        disabled: false
      },
        {
          name: '用户',
          disabled: false
        }
      ],
      // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
      radiovalue1: '管理员',
    }
  },
  methods: {
    change(e) {
      console.log('change', e);
    },
    groupChange(n) {
      console.log('groupChange', n);
    },
    login() {
      var encryption={
        username: this.form.username,
        password:  md5(this.form.password)
      }
      user.login(encryption.username,encryption.password).then(resp=>{
        const {code, msg,data} = resp;
        if (code === 0) {
          uni.setStorageSync("token",data.token)
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
          uni.navigateTo({
            url:"/pages/index/index"
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
    },
    radioChange(n) {
      console.log('radioChange', n);
    },
    register() {
      uni.navigateTo({
        url:"/pages/reg/reg"
      })
    },
  }
}
</script>

<style lang="scss">
.u-radio.data-v-643b3322 {
  margin: 10px 20px;
}


</style>
