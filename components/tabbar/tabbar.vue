
<template>
  <view>
    <keep-alive>
    <u-tabbar
        ref="tabbar"
        v-model="currentVal"
        @change="tabbarChange"
        :fixed="true"
        :placeholder="true"
        :safeAreaInsetBottom="true"
    ><u-tabbar-item v-for="item in list"
                     :dot="item.isDot"
                     :icon="item.iconPath"
                     :text="item.text">
    </u-tabbar-item>
    </u-tabbar>
    </keep-alive>
  </view>
</template>

<script>

export default ({
  name: "tabbar",
  props:{

  },

  data(){
    return{
      list:[
        {
          "pagePath": "pages/index/index",
          "text": "首页",
          iconPath: "home",
          "isDot": true,
        },{
          "pagePath": "pages/admin/admin",
          "text": "讨论",
          iconPath: "photo",
          "midButton": true
        },
        {
          "iconPath": "account",
          "pagePath": "pages/my/my",
          "text": "我的",
        }
      ],
      currentVal:0,
      pages:[
          "/pages/index/index",
          "/pages/admin/admin",
          "/pages/my/my"
      ],
    }
  },
  onLoad() {
  },
  methods: {

    tabbarChange(val) {
      console.log(val)

      let page = this.pages[val];
      console.log(page)
      uni.switchTab({
        url:page
      })

      this.nextTick(()=>{
        this.currentVal=val
      })
      this.$refs.tabbar.

    }
  },
})
</script>


<style scoped>

</style>