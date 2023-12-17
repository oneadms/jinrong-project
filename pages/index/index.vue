<template>
	<view class="content">
    <u-swiper :list="bannerList"
    style="height: 400px"/>
	

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
