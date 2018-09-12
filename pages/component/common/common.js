Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value'
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    created() {
      console.log('组件生命周期Creaed')
    },
    attached() {
      console.log('组件生命周期Attached')
    },
    ready() {
      console.log('组件生命周期Ready')
      // 访问组件对象
      console.log(this)
    },
    moved() {
      console.log('组件生命周期Moved')
    },
    detached() {
      console.log('组件生命周期Detached')
    }
  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function() {}
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function() {}
  }
})
