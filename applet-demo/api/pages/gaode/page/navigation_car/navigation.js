var amapFile = require('../../libs/amap-wx.js');
var config = require('../../libs/config.js');

Page({
  data: {
    companyLongitude : "113.93041",
    companyLatitude : "22.53832",   //22.53332
    distance: '',
    cost: '',
    polyline: [],

    markers: [
       {
          iconPath: "../../img/mapicon_navi_e.png",
          id: 0,
          latitude: 22.53832,   //22.53332
          longitude: 113.93041,
          width: 24,
          height: 34
    }],
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
            let markers = that.data.markers;
            markers.push(pointObj);
            that.setData({
                markers : markers,
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
              var points = [];
              if(data.paths && data.paths[0] && data.paths[0].steps){
                  var steps = data.paths[0].steps;
                  for(var i = 0; i < steps.length; i++){
                      var poLen = steps[i].polyline.split(';');
                      for(var j = 0;j < poLen.length; j++){
                          points.push({
                              longitude: parseFloat(poLen[j].split(',')[0]),
                              latitude: parseFloat(poLen[j].split(',')[1])
                          })
                      }
                  }
              }
              that.setData({
                  polyline: [{
                      points: points,
                      color: "#0091ff",
                      width: 6
                  }]
              });
              if(data.paths[0] && data.paths[0].distance){
                  that.setData({
                      distance: data.paths[0].distance + '米'
                  });
              }
              if(data.taxi_cost){
                  that.setData({
                      cost: '打车约' + parseInt(data.taxi_cost) + '元'
                  });
              }

          }
      })
  },

  goDetail: function(){
    wx.navigateTo({
      url: '../navigation_car_detail/navigation'
    })
  },
  goToCar: function (e) {
    wx.redirectTo({
      url: '../navigation_car/navigation'
    })
  },
  goToBus: function (e) {
    wx.redirectTo({
      url: '../navigation_bus/navigation'
    })
  },
  goToRide: function (e) {
    wx.redirectTo({
      url: '../navigation_ride/navigation'
    })
  },
  goToWalk: function (e) {
    wx.redirectTo({
      url: '../navigation_walk/navigation'
    })
  }
})