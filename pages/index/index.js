// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    imgUrls: [],
    typelist: []
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;
    wx.request({
      url: 'https://xuzhichao.cn/dianshang_imgUrls ',
      data: {},
      method: 'GET',
      success: function (res) {
         console.log(res.data.dianshang_imgUrls);
        that.setData({
          imgUrls: res.data.dianshang_imgUrls
        })
      },
      fail: function () {
        setTimeout(function () {
          wx.showToast({
            title: "加载失败",
            duration: 1500
          })
        }, 100)
      },
      complete: function () {
        wx.hideToast();
      }
    })

    wx.request({
      url: 'https://xuzhichao.cn/dianshang_typelist ',
      data: {},
      method: 'GET',
      success: function (res) {
        console.log(res.data.dianshang_typelist);
        that.setData({
          typelist: res.data.dianshang_typelist
        })
      },
      fail: function () {
      },
      complete: function () {
      }
    })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  swiperchange: function(event) {
    var that = this;
    console.log(event.currentTarget.dataset.swiper)
    var swiperID = event.currentTarget.dataset.swiper.id
    var image = event.currentTarget.dataset.swiper.image
    wx.navigateTo({
      url: '/pages/swipers/swipers?id=' + swiperID + "&image=" + image,
    })
  },
  navigateToShop: function(event) {
    wx.navigateTo({
      url: '/pages/index/good/good',
    })
  },
  navigateToDetail: function(e) {
    console.log(e.currentTarget.dataset.id)
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/index/good/detail/detail?id='+id,
    })

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
