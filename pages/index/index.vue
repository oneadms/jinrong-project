<template>
	<view class="content">

    <u-swiper
        style="position: absolute;width: 100%;height: 450px"
        :list="bannerList"

    ></u-swiper>
    <u--input
        placeholder="请输入内容"
        border="surround"
        v-model="value"
        @change="change"
    ></u--input>
    <u-icon name="photo" color="#2979ff" size="28"></u-icon>



	</view>
</template>

<script>
	export default {
		data() {
			return {

        keyword:'',
				title: '新闻',
        bannerList:[

          require("@/static/images/img.png"),
          require("@/static/images/img.png"),
          require("@/static/images/img.png")

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
