// pages/selectorQuery/selectorQuery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

    //返回一个SelectorQuery对象实例
    queryMultipleNodes: function(){
        var query = wx.createSelectorQuery()
        query.select('#the-id').boundingClientRect()
        query.selectViewport().scrollOffset()
        query.exec(function(res){
            res[0].top       // #the-id节点的上边界坐标
            res[1].scrollTop // 显示区域的竖直滚动位置
        })
    }

})