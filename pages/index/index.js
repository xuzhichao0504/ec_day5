// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    imgUrls: [{
        "id": 1,
        "image": "http://xuzhichao.xyz/swiper1.jpg"
      },
      {
        "id": 2,
        "image": "http://xuzhichao.xyz/swiper2.jpg"
      },
      {
        "id": 3,
        "image": "http://xuzhichao.xyz/swiper3.jpg"
      },
    ],
    typelist: [{
        "id": 1,
        "pic": "bjbdn",
        "name": "笔记本",
        "goods": [{
            "id": 1,
            "mid": 1,
            "title": "Hasee/神舟 战神系列 Z7-KP7D2 NVIDIA GeForce GTX1060 (Laptop)",
            "pic": "http://xuzhichao.xyz/bjb1.png",
            "price": 6699,
            "isHighlyRecommended": true
          },
          {
            "id": 2,
            "mid": 2,
            "title": "Xiaomi/小米 笔记本Pro 15.6英寸I7 8G ",
            "pic": "http://xuzhichao.xyz/bjb2.jpg",
            "price": 4899
          }
        ]
      },
      {
        "id": 2,
        "pic": "ts",
        "name": "台式机",
        "goods": [{
          "id": 1,
          "mid": 3,
          "title": "华硕傲世一体机电脑四核V241办公游戏  ",
          "pic": "http://xuzhichao.xyz/ts1.jpg",
          "price": 4988
        }, {
          "id": 2,
          "mid": 4,
          "title": "aoc办公一体机电脑家用四核壁挂一体式  ",
          "pic": "http://xuzhichao.xyz/ts2.jpg",
          "price": 2088
        }, {
          "id": 3,
          "mid": 5,
          "title": "联想台式机电脑天逸5055 四核A8-760  ",
          "pic": "http://xuzhichao.xyz/ts3.jpg",
          "price": 2299
        }, {
          "id": 4,
          "mid": 6,
          "title": "Apple iMac 27英寸一体机（2017款四核Core i5/8GB内存/1TB Fusion Drive/RP570显卡/5K屏 MNE92CH/A） ",
          "pic": "http://xuzhichao.xyz/ts4.jpg",
          "price": 13888
        }]
      }, {
        "id": 3,
        "pic": "ws",
        "name": "电脑外设",
        "goods": [{
          "id": 1,
          "mid": 7,
          "title": "蒸汽朋克机械键盘鼠标套装电脑复古电  ",
          "pic": "http://xuzhichao.xyz/dnws1.jpg",
          "price": 229
        }, {
          "id": 2,
          "mid": 8,
          "title": "Technology/新盟 蒸汽朋克机械键盘鼠标套装 USB USB  ",
          "pic": "http://xuzhichao.xyz/dnws2.jpg",
          "price": 119
        }]
      }, {
        "id": 4,
        "pic": "sjpj",
        "name": "手机配件",
        "goods": [{
          "id": 1,
          "mid": 9,
          "title": "大眼蛙手机镜头iphoneX广角增距微距  ",
          "pic": "http://xuzhichao.xyz/sjpj1.jpg",
          "price": 1380
        }, {
          "id": 2,
          "mid": 10,
          "title": "图拉斯 真无线蓝牙耳机 迷你隐形运动入耳式蓝牙耳机双耳跑步  ",
          "pic": "http://xuzhichao.xyz/sjpj2.jpg",
          "price": 188
        }]
      }, {
        "id": 5,
        "pic": "sj",
        "name": "智能手机",
        "goods": [{
          "id": 1,
          "mid": 11,
          "title": "可12期免息/Huawei/华为 P20 pro中  ",
          "pic": "http://xuzhichao.xyz/znsj1.jpg",
          "price": 5488
        }, {
          "id": 2,
          "mid": 12,
          "title": "Apple/苹果 iPhoneX Apple Store 官方旗舰店 ",
          "pic": "http://xuzhichao.xyz/znsj2.jpg",
          "price": 10999
        }]
      }, {
        "id": 6,
        "pic": "pcpj",
        "name": "pc配件",
        "goods": [{
          "id": 1,
          "mid": 13,
          "title": "丹麦AM手机屏幕清洁剂液晶屏清洁笔 ",
          "pic": "http://xuzhichao.xyz/pcpj1.jpg",
          "price": 75
        }, {
          "id": 2,
          "mid": 14,
          "title": "OPULA欧普拉036 笔记本电脑液晶屏幕 ",
          "pic": "http://xuzhichao.xyz/pcpj2.jpg",
          "price": 45
        }]
      }, {
        "id": 7,
        "pic": "shuma",
        "name": "数码相机",
        "goods": [{
          "id": 1,
          "mid": 15,
          "title": "Canon/佳能 EOS 200D套机(18-55mm) 22.3mmx14.9mm 9点 ",
          "pic": "http://xuzhichao.xyz/smxj1.jpg",
          "price": 3799
        }, {
          "id": 2,
          "mid": 16,
          "title": "Canon/佳能 EOS 80D套机(18-200mm) 22.3mmx14.9mm 22.3*14.9mm 中 ",
          "pic": "http://xuzhichao.xyz/smxj2.jpg",
          "price": 8999
        }]
      }, {
        "id": 8,
        "pic": "znpd",
        "name": "智能穿戴",
        "goods": [{
          "id": 1,
          "mid": 17,
          "title": "【最高优惠50】HUAWEI WATCH 2 Pr ",
          "pic": "http://xuzhichao.xyz/zncd1.jpg",
          "price": 2188
        }, {
          "id": 2,
          "mid": 18,
          "title": "BIM 手环 智能手环运动男女心率血压监测量计步器乐心",
          "pic": "http://xuzhichao.xyz/zncd2.jpg",
          "price": 198
        }]
      }
    ]
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