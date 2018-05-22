var amapFile = require('../../libs/amap-wx.js');
var config = require('../../libs/config.js');

Page({
  data: {
      steps: {},
      companyLongitude : "114.93041",
      companyLatitude : "22.53832", //22.53332
  },
  onLoad: function() {
      var that = this;
      var key = config.Config.key;
      wx.getLocation({
          success : function (res) {
              let startLatitude = res.latitude;
              let startLongitude = res.longitude;
              let pointObj = {
                  iconPath: "../../img/mapicon_navi_s.png",
                  id: 0,
                  latitude: startLatitude,
                  longitude: startLongitude,
                  width: 23,
                  height: 33
              };
              that.setData({
                  pointObj : pointObj
              });
              that.loadNext();
          },
          fail : function (res) {
              wx.showToast({
                  title : '地理位置获取失败',
                  icon : "none"
              });
          }
      });
  },

    loadNext(){
        var that = this;
        var key = config.Config.key;
        var myAmapFun = new amapFile.AMapWX({key: key});
        var companyLongitude = that.data.companyLongitude;
        var companyLatitude = that.data.companyLatitude;
        var originLongitude = that.data.pointObj.longitude;
        var originLatitude = that.data.pointObj.latitude;
        myAmapFun.getDrivingRoute({
            origin: `${originLongitude},${originLatitude}`,
            destination: `${companyLongitude},${companyLatitude}`,
            success: function(data){
                if(data.paths && data.paths[0] && data.paths[0].steps){
                    that.setData({
                        steps: data.paths[0].steps
                    });
                }

            },
            fail: function(info){

            }
        })
    }


})