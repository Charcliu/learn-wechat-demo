var app = getApp()

Page({
  data: {
    message: 'Hello MINA!',
    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' }
    ],
    numberArray: [1, 2, 3, 4],
    length: 5,
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    }
  },
  onLoad() {
    var pages = getCurrentPages()
    var currPage = pages[pages.length - 1] //当前页面
    var prevPage = pages[pages.length - 2] //上一个页面

    console.log(currPage)
    console.log(prevPage)
  },
  switch: function(e) {
    console.log(e.currentTarget.dataset.alphaBeta)
    //随机交换
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function(e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(
      this.data.objectArray
    )
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToFront: function(e) {
    this.data.numberArray = [this.data.numberArray.length + 1].concat(
      this.data.numberArray
    )
    this.setData({
      numberArray: this.data.numberArray
    })
  },
  switch1Change(e) {
    console.log(e)
  }
})
