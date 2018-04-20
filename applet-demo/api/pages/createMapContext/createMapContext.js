// pages/createMapContext/createMapContext.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        // 使用 wx.createMapContext 获取 map 上下文
        this.mapCtx = wx.createMapContext('myMap');
    },

    //获取位置
    getCenterLocation: function () {
        this.mapCtx.getCenterLocation({
            success: function(res){
                console.log(res.longitude)
                console.log(res.latitude)
            }
        })
    },

    //移动位置
    moveToLocation: function () {
        this.mapCtx.moveToLocation()
    },

    //移动标注
    translateMarker: function() {
        this.mapCtx.translateMarker({
            markerId: 0,
            autoRotate: true,
            duration: 1000,
            destination: {
                latitude:23.10229,
                longitude:113.3345211,
            },
            animationEnd() {
                console.log('animation end')
            }
        })
    },

    //缩放视野展示所有经纬度
    includePoints: function() {
        this.mapCtx.includePoints({
            padding: [10],
            points: [{
                latitude:23.10229,
                longitude:113.3345211,
            }, {
                latitude:23.00229,
                longitude:113.3345211,
            }]
        })
    }


})