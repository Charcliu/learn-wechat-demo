Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'Hello Component'
    }
  },
  data: {},
  methods: {
    onTap: function() {
      // 所有要带到主页面的数据，都装在eventDetail里面
      var eventDetail = {
        name: 'sssssssss',
        test: [1, 2, 3]
      }
      // 触发事件的选项 bubbles是否冒泡，composed是否可穿越组件边界，capturePhase 是否有捕获阶段
      var eventOption = {
        composed: true
      }
      this.triggerEvent('myevent', eventDetail, eventOption)
    }
  }
})
