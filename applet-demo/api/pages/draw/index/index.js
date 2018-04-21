// pages/draw/index/index.js
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
      const ctx1 = wx.createCanvasContext('myCanvas1')
      ctx1.setFillStyle('red')
      ctx1.fillRect(10, 10, 150, 75)
      ctx1.draw()
  },

})