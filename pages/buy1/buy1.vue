<template>
	<view style="margin-top: 40px">

    <b><h2 style="text-align: center; ">购买页面</h2></b>
    <view style="width: 100%;height: 40px"></view>

    <view>
      <view class="u-page">
        <u-list
            @scrolltolower="scrolltolower"
        >
          <u-list-item
              v-for="(item, index) in indexList"
              :key="index"
          >
            <u-cell
                :title="`列表长度-${index + 1}`"
            >
              <u-avatar
                  slot="icon"
                  shape="square"
                  size="35"
                  :src="item.url"
                  customStyle="margin: -3px 5px -3px 0"
              ></u-avatar>
            </u-cell>
          </u-list-item>
        </u-list>
      </view>
    </view>

    <view style="margin-top: -149px; !important;">
      <u-button  type="success" size="large" text="购买" @click="register"></u-button>
    </view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
        indexList: [],
        urls: [
          'https://cdn.uviewui.com/uview/album/1.jpg',
          'https://cdn.uviewui.com/uview/album/2.jpg',
          'https://cdn.uviewui.com/uview/album/3.jpg',
          'https://cdn.uviewui.com/uview/album/4.jpg',
          'https://cdn.uviewui.com/uview/album/5.jpg',
          'https://cdn.uviewui.com/uview/album/6.jpg',
          'https://cdn.uviewui.com/uview/album/7.jpg',
          'https://cdn.uviewui.com/uview/album/8.jpg',
          'https://cdn.uviewui.com/uview/album/9.jpg',
          'https://cdn.uviewui.com/uview/album/10.jpg',
        ]
			}
		},
    onLoad() {
      this.loadmore()
    },
		methods: {
      scrolltolower() {
        this.loadmore()
      },
      loadmore() {
        for (let i = 0; i < 30; i++) {
          this.indexList.push({
            url: this.urls[uni.$u.random(0, this.urls.length - 1)]
          })
        }
      }
		}
	}
</script>

<style>

</style>
