const app = getApp()

// 页面构造器
Page({
  data: {
    text: 'This is test data.',
    array: [{ msg: 'WeChat' }, { msg: 'Wxml' }]
  },
  onLoad: function(options) {
    // Do some initialize when page load.
    console.log('onLoad: ' + JSON.stringify(options))
  },
  onReady: function() {
    // Do something when page ready.
    console.log('onReady')
  },
  onShow: function() {
    // Do something when page show.
    console.log('onShow')
    console.log(this.route)
  },
  onHide: function() {
    // Do something when page hide.
    console.log('onHide')
  },
  onUnload: function() {
    // Do something when page close.
    console.log('onUnload')
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
    console.log('onPullDownRefresh')
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
    console.log('onReachBottom')
  },
  onShareAppMessage: function(res) {
    // return custom share data when user share.
    console.log('onShareAppMessage')
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: 'Fluenlty Share To You',
      path: '/pages/test/test'
    }
  },
  onPageScroll: function() {
    // Do something when page scroll
    console.log('onPageScroll')
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // Event handler.
  viewTap: function() {
    this.setData(
      {
        text: 'Set some data for updating view.'
      },
      function() {
        // this is setData callback
      }
    )
  },
  clickMe(param) {
    console.log('事件处理函数: Click Me ' + param)
  },
  changeData() {
    this.setData({
      text: 'Hello Test',
      array: [{ msg: 'Vue' }, { msg: 'Vuex' }]
    })
  },
  customData: {
    hi: 'MINA'
  },
  // navigateTo, redirectTo 只能打开非 tabBar 页面。
  // switchTab 只能打开 tabBar 页面。
  // reLaunch 可以打开任意页面。
  // 页面底部的 tabBar 由页面决定，即只要是定义为 tabBar 的页面，底部都有 tabBar。
  // 调用页面路由带的参数可以在目标页面的onLoad中获取。
  newpage() {
    wx.navigateTo({
      url: '/pages/view/view'
    })
  },
  redirect() {
    wx.redirectTo({
      url: '/pages/index/index'
    })
  },
  reback() {
    wx.navigateBack({
      url: '/pages/index/index'
    })
  },
  tabSwitch() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  restart() {
    wx.reLaunch({
      url: '/pages/index/index'
    })
  }
})
