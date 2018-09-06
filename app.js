//app.js
// 整个小程序只有一个 App 实例，是全部页面共享的
// App() 函数用来注册一个小程序。接受一个 Object 参数，其指定小程序的生命周期回调等。
// App() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。
App({
  onLaunch: function(obj) {
    // 小程序启动之后 触发
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  // 前台、后台定义： 当用户点击左上角关闭，或者按了设备 Home 键离开微信，小程序并没有直接销毁，而是进入了后台；
  // 当再次进入微信或再次打开小程序，又会从后台进入前台。
  // 需要注意的是：只有当小程序进入后台一定时间，或者系统资源占用过高，才会被真正的销毁。
  onShow: function() {
    wx.showToast({
      title: '从后台进入前台',
      icon: 'succes',
      duration: 1000,
      mask: true
    })
  },
  onHide() {
    wx.showToast({
      title: '从前台进入后台',
      icon: 'succes',
      duration: 1000,
      mask: true
    })
  },
  onError: function(msg) {
    console.log(msg)
  },
  onPageNotFound(res) {
    wx.redirectTo({
      url: 'pages/logs/logs'
    }) // 如果是 tabbar 页面，请使用 wx.switchTab
  },
  globalData: {
    userInfo: null
  }
})

// 不要在定义于 App() 内的函数中调用 getApp() ，使用 this 就可以拿到 app 实例。
// 通过 getApp() 获取实例之后，不要私自调用生命周期函数。
