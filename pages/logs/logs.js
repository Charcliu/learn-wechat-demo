//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onReady: function() {
    // Do something when page ready.
    console.log('onReady')
  },
  logBind(event) {
    console.log(event.currentTarget.dataset)
  },
  onMyEvent(e) {
    // 子组件通讯父组件
    console.log(e)
    console.log(e.detail)
    let logsArray = this.data.logs
    logsArray[e.currentTarget.dataset.index] = e.detail.name
    this.setData({
      logs: logsArray
    })
  }
})
