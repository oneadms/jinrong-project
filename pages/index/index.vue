<template>
	<view class="content">

      <u-swiper
          indicator

          :list="bannerList"
          img-mode="aspectFill"
          height="260px"
      ></u-swiper>
    <u-search
        height="38px"
        placeholder="搜索"></u-search>
    <view>

      <u-grid
          :border="false"
          @click="newsLinkClick"
      >
        <u-grid-item
            v-for="(item,index) in list"
            :key="index">
          <text class="grid-text">{{item.title}}</text>
        </u-grid-item>
      </u-grid>

    </view>

<view>
  <u-divider text="分割线" :dot="true"></u-divider>
</view>

<view>
  <u-list

  >
    <u-list-item
        v-for="(item, index) in newsList"
        :key="index"
    >
      <u-cell
          :title="item.newsContent"
      >
        <u-avatar
            slot="icon"
            shape="square"
            size="100"
            :src="item.newsImgUrl"
            customStyle="margin: -3px 5px -3px 0"
        ></u-avatar>
        <u-text></u-text>
      </u-cell>
    </u-list-item>
  </u-list>
<!--<tabbar />-->
</view>




  </view>
</template>

<script>
const home = uniCloud.importObject('home')
	export default {
		data() {
			return {


        newsList: [],

        loading:true,
        list:[],


        keyword:'',
				title: '新闻',
        bannerList:[]
			}
		},

		onLoad() {
      this.initData();
		},
		methods: {

      newsLinkClick(item) {
        console.log(item)
      },
      async initData() {
        this.newsList = await home.getNewsList();
        this.list=await home.getNews()
        this.bannerList=await home.getBannerList()
      },

		}
	}
</script>

<style>

</style>
