<template>
	<view class="content">

    <swiper>
      <swiper-item  v-for="item in bannerList">
          <image  :src="item" style="width: 100%;height: 100%"/>
      </swiper-item>
    </swiper>
	

	</view>
</template>

<script>

	export default {
		data() {
			return {

        keyword:'',
				title: '新闻',
        bannerList:[

        "https://env-00jx4x6rfurp.normal.cloudstatic.cn/images/img.png",
            "https://env-00jx4x6rfurp.normal.cloudstatic.cn/images/img.png",
            "https://env-00jx4x6rfurp.normal.cloudstatic.cn/images/img.png",
            "https://env-00jx4x6rfurp.normal.cloudstatic.cn/images/img.png"

        ]
			}
		},
		onLoad() {
			
	  
		},
		methods: {


		}
	}
</script>

<style>

</style>
