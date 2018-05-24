Page({
    onReady: function (e) {
        // 使用 wx.createMapContext 获取 map 上下文
        this.mapCtx = wx.createMapContext('myMap')
    },

    //获取当前地图中心的经纬度，返回的是 gcj02 坐标系
    getCenterLocation: function () {
        this.mapCtx.getCenterLocation({
            success: function(res){
                console.log(res.longitude)
                console.log(res.latitude)
            }
        })
    },

    //将地图中心移动到当前定位点，需要配合map组件的show-location使用
    moveToLocation: function () {
        this.mapCtx.moveToLocation()
    },

    //平移marker，带动画
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
    },

    //获取当前地图的视野范围
    getRegion: function () {
        this.mapCtx.getRegion({
            success(res){
              console.log(res);
            },
            fail(res){
              console.log(res);
            }
        });
    },

    //获取当前地图的缩放级别
    getScale: function () {
        this.mapCtx.getScale({
            success(res){
              console.log(res);
            },
            fail(res){
                console.log(res);
            }
        })
    }
})