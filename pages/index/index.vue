<template>
	<view class="content">

    <u-swiper :list="bannerList" style="width: 100%;height: 400px"></u-swiper>
    <u-input
        placeholder="请输入内容"
        border="surround"
        v-model="value"
        @change="change"
    ></u-input>


	</view>
</template>

<script>
	export default {
		data() {
			return {

        keyword:'',
				title: '新闻',
        bannerList:[

        'https://cdn.uviewui.com/uview/swiper/swiper1.png',
        'https://cdn.uviewui.com/uview/swiper/swiper2.png',
        'https://cdn.uviewui.com/uview/swiper/swiper3.png',

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
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
