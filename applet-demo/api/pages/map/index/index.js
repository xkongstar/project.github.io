// pages/map/index/index.js
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

    openLocation:function () {
        wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success: function(res) {
                var latitude = res.latitude
                var longitude = res.longitude
                wx.openLocation({
                    latitude: latitude,
                    longitude: longitude,
                    scale: 28
                })
            }
        })
    },

    chooseLocation:function () {
        wx.chooseLocation({
            success:function (res) {
                console.log(res);
                let name = res.name;
                let latitude = res.latitude;
                let longitude = res.longitude;
                console.log(name,latitude,longitude);
            },
            fail:function (res) {
                console.log(res);
                if(res.errMsg == 'chooseLocation:fail auth deny'){
                    wx.showModal({
                        content : '重新进行地理位置授权',
                        success: function(res) {
                            if (res.confirm) {
                                wx.openSetting({
                                    success: (res) => {
                                      console.log(res);
                                    }
                                })
                            } else if (res.cancel) {
                                console.log('用户点击取消')
                            }
                        }

                    });
                }
            }
        });
    },

    createMapContext:function () {
        wx.navigateTo({
            url: '../createMapContext/createMapContext'
        })
    }


})