# README

## 电商小程序课程第五天

### 1.回顾上节wx.request 的“GET”方法通过http协议获取网页API数据（后台已搭建好，我们将在server端课程中学习）

微信小程序开发者文档小程序开发——>API——>网络——>wx.request

![Image text](http://xuzhichao.xyz//day5/wx.request.jpg)

### 2.通过detail.js的onLoad中options方法我们将在detail.js中获取到商品详情页的商品属性id（关键id）
在index.js中：
~~~
// 传递我们选中商品的商品属性id
navigateToGood: function (e) {
    var id = e.currentTarget.dataset.id;
    var typelist = this.data.typelist
    wx.navigateTo({
      url: './good/detail/detail?id=' + id,
    })
  },
~~~
在detail.js中
~~~
onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数
    console.log("options=",options)
    this.setData({
      id: options.id - 1  // 便于我们去获取商品
    })
}
~~~
### 3.根据商品id，我们通过wx.request获取我们布局在https://xuzhichao.cn/good_get 中对应商品id的商品详细信息
~~~
onShow: function() {
 var id = this.data.id;     //将index.js中获取到的商品id导入逻辑函数
wx.request({
      url: 'https://xuzhichao.cn/good_get',  
      data: {},
      method: 'GET',     
      success: function(res) {
        console.log(res.data.good_get[id])     
        that.setData({
          good: res.data.good_get[id],    //获取到商品数据库中对应												
                                            商品id的商品详细信息 
        })       
      },
~~~
 
 ### 4.我们将获取到的商品数据存入detail.js页面中，并设参数名为good，存放在data{}中
~~~
  data: {
    id:[],
    good:[],
}
~~~
### 5.我们在detail.wxml中将我们的数据进行页面渲染，主要包含五个部分：商品信息滚动轮播图（swiper）、商品价格与优惠显示（view）、商品套餐切换（picker）、商品信息图文详情（条件渲染wx:if）、购物车底部工具栏（包含“加入购物车”、“立即购买”、“查看购物车”（view））

### 6.查看购物车
~~~
lookcart:function(e){
    wx.switchTab({     //跳转到tabBar
      url: '/pages/cart/cart',
    })
  },
~~~

### 7.添加购物车逻辑实现
~~~
 addToCart: function (e) {
    var id = this.data.id;
    var good = this.data.good
    var that = this;
    wx.request({
      url: 'https://xuzhichao.cn/good_addToCart',
      data: {
        num: 1,
        mode: 0,
        checked: false,
        good: this.data.good,
        nickName: this.data.nickName,
        id: this.data.id
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      })
     }
~~~
