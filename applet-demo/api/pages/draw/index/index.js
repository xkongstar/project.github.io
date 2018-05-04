// pages/draw/index/index.js
Page({

    /**
    * 页面的初始数据
    */
    data: {
      hidden: true
    },

    /**
    * 生命周期函数--监听页面加载
    */
    onLoad: function (options) {
        const ctx1 = wx.createCanvasContext('myCanvas1')
        ctx1.setFillStyle('red')
        ctx1.fillRect(10, 10, 150, 75)
        ctx1.draw();

        //线性渐变
        const ctx3 = wx.createCanvasContext('myCanvas3');
        // Create linear gradient
        const grd3 = ctx3.createLinearGradient(0, 0, 200, 0)
        grd3.addColorStop(0, 'red')
        grd3.addColorStop(1, 'white')
        //Fill with gradient
        ctx3.setFillStyle(grd3)
        ctx3.fillRect(10, 10, 150, 80)
        ctx3.draw();

        //原型渐变
        const ctx4 = wx.createCanvasContext('myCanvas4')
        // Create circular gradient
        const grd4 = ctx4.createCircularGradient(75, 50, 50)
        grd4.addColorStop(0, 'red')
        grd4.addColorStop(1, 'white')
        // Fill with gradient
        ctx4.setFillStyle(grd4)
        ctx4.fillRect(10, 10, 150, 80)
        ctx4.draw()
    },

    start: function(e) {
        this.setData({
            hidden: false,
            x: e.touches[0].x,
            y: e.touches[0].y
        })
    },
    move: function(e) {
        this.setData({
            x: e.touches[0].x,
            y: e.touches[0].y
        })
    },
    end: function(e) {
        this.setData({
            hidden: true
        })
    },



})