//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    picUrl:app.globalData.bgUrl,
    navHeight:"",
    navTop:"",
    height:"",
    banner:[{},{}],
    bannerIndex:0,
    indexNav:[
      {
        title:'校园部落',
        icon:'../../images/indexNav1.png',
        url:'这里写跳转页面地址'
      },
      {
        title:'发布活动',
        icon:'../../images/indexNav2.png',
        url:'这里写跳转页面地址'
      },
      {
        title:'签到/退',
        icon:'../../images/indexNav3.png',
        url:'这里写跳转页面地址'
      },
      {
        title:'签到员',
        icon:'../../images/indexNav4.png',
        url:'这里写跳转页面地址'
      },
      {
        title:'排行榜',
        icon:'../../images/indexNav5.png',
        url:'这里写跳转页面地址'
      },
      {
        title:'兑换学时申请',
        icon:'../../images/indexNav6.png',
        url:'这里写跳转页面地址'
      },
      {
        title:'校内通知',
        icon:'../../images/indexNav7.png',
        url:'这里写跳转页面地址'
      },
      {
        title:'系统消息',
        icon:'../../images/indexNav8.png',
        url:'这里写跳转页面地址'
      }
    ],
    list:[
      {
        image:"../../images/pic1.jpg",
        title:"舞动人生-大学生音乐节",
        baomingDate:"12.29 12:20 - 01.30 12:30",
        huodongDate:"12.29 12:20 - 01.30 12:30",
        didian:"南教113",
        is_tuijian:"1",
        is_jinxing:"1",
        biaoqianArray:["思","3学时","需审核","需签退","满"]
      },
      {
        image:"../../images/pic2.jpg",
        title:"舞动人生-大学生音乐节",
        baomingDate:"12.29 12:20 - 01.30 12:30",
        huodongDate:"12.29 12:20 - 01.30 12:30",
        didian:"南教113",
        is_tuijian:"0",
        is_jinxing:"1",
        biaoqianArray:["思","3学时","需审核","需签退"]
      },
      {
        image:"../../images/pic3.jpg",
        title:"舞动人生-大学生音乐节",
        baomingDate:"12.29 12:20 - 01.30 12:30",
        huodongDate:"12.29 12:20 - 01.30 12:30",
        didian:"南教113",
        is_tuijian:"0",
        is_jinxing:"0",
        biaoqianArray:["思","3学时","需审核"]
      }
    ]
  },
  onLoad: function () {
    let menuButtonObject = wx.getMenuButtonBoundingClientRect(),
        that = this;
    this.setData({
      height:menuButtonObject.height
    })
    wx.getSystemInfo({
      success: res => {
        let statusBarHeight = res.statusBarHeight,
          navTop = menuButtonObject.top,//胶囊按钮与顶部的距离
          navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight)*2;//导航高度
          that.setData({
            navHeight: navHeight,
            navTop: navTop
          })
      },
      fail(err) {
        console.log(err);
      }
    })
  },
  banner:function(e){
    this.setData({
        bannerIndex:e.detail.current
    })
  },
})
