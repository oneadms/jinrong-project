// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj

const {log} = require("console");

// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
module.exports = {
    _before: function () { // 通用预处理器

    },

	async getBannerList() {
		return [


				"https://env-00jx4x6rfurp.normal.cloudstatic.cn/images/img.png",
				"https://env-00jx4x6rfurp.normal.cloudstatic.cn/images/img.png",
				"https://env-00jx4x6rfurp.normal.cloudstatic.cn/images/img.png",
				"https://env-00jx4x6rfurp.normal.cloudstatic.cn/images/img.png"
		]
	},
	//要闻
	async getNews() {
		return[
			{title:"我这一生如履薄冰，你说我能走到对岸吗"},
			{title:"刺骨的风还是吹到了广东，要走的人你是留不住的"},
			{title:"扛得起木头，扛不住想你"}
		]
	},
	async getNewsList() {
		return [
			{
				newsContent:'商汤股价下跌，受创始人汤晓鸥去世的消息拖累',
				newsImgUrl:'https://images.wsj.net/im-902083?width=430&height=287&pixel_ratio=2'
			},{
				newsContent: '七张图表解析美股“七雄”的一骑绝尘',
				newsImgUrl:'https://images.wsj.net/im-901924?width=110&height=73&pixel_ratio=2'
			},{
				newsContent:'上周五金融市场回顾：油价下跌，但八周来首次周度收高',
				newsImgUrl:'https://images.wsj.net/im-364750?width=110&height=73&pixel_ratio=2'
			},{
				newsContent: '为何说2024年亚马逊股票在大型互联网公司中上涨空间最大？',
				newsImgUrl:'https://images.wsj.net/im-891384?width=110&height=73&pixel_ratio=2'
			}
		]
	},


}
