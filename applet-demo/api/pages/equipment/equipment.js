// pages/equipment/equipment.js
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

      //监听网络状态变化
      wx.onNetworkStatusChange(function(res){
        console.log(res);
      });

      //用户使用系统截屏按键截屏时触发此事件
      wx.onUserCaptureScreen(function(res) {
          console.log('用户截屏了')
      })

  },

    //获取网络类型
    getNetworkType(){
        wx.getNetworkType({
            success: function(res) {
                // 返回网络类型, 有效值：
                // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
                var networkType = res.networkType;
                console.log(res);
            }
        })
    },

    //设置屏幕亮度
    setScreenBrightness(){
        wx.setScreenBrightness({
            value : 1,
            success:function(res){
                console.log(res);
            },
        });
    },

    //获取屏幕亮度
    getScreenBrightness(){
        wx.getScreenBrightness({
            success:function (res) {
                console.log(res);
            }
        });
    },

    //使手机发生振动（400ms）
    vibrateLong(){
        wx.vibrateLong({
            success : function (res) {
                console.log(res);
            }
        });
    },

    //使手机发生振动（15ms）
    vibrateShort(){
        wx.vibrateShort({
            success : function (res) {
                console.log(res);
            }
        });
    },

    // 监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，
    // 可使用 wx.stopAccelerometer 停止监听
    onAccelerometerChange(){
        wx.onAccelerometerChange(function(res) {
            console.log(res);
            console.log(res.x)
            console.log(res.y)
            console.log(res.z)
        })
    },

    //监听罗盘数据
    onCompassChange(){
        wx.onCompassChange(function (res) {
            console.log(res.direction)
        })
    },

    //调起客户端扫码界面
    scanCode(){
        wx.scanCode({
            success: (res) => {
                console.log(res)
            }
        })
    },

    //设置系统剪贴板的内容
    setClipboardData(){
        wx.setClipboardData({
            data: 'data',
            success: function(res) {
                wx.getClipboardData({
                    success: function(res) {
                        console.log(res.data) // data
                    }
                })
            }
        })
    },

    //获取系统剪贴板内容
    getClipboardData(){
        wx.getClipboardData({
            success: function(res){
                console.log(res.data)
            }
        })
    },

    //蓝牙适配器接口
    bluetoothAdapter(){
        wx.navigateTo({
            url: '../bluetoothAdapter/bluetoothAdapter'
        })
    },

    //iBeacon
    iBeacon(){
        wx.navigateTo({
            url: '../iBeacon/iBeacon'
        })
    },

    //手机联系人
    addPhoneContact(){
        wx.addPhoneContact({
            photoFilePath : '/images/Sorry.png',
            nickName : 'Serio',
            lastName : '肖',
            firstName : '瑶',
            remark : '小程序',
            mobilePhoneNumber : '18681597074',
            weChatNumber : 'x13762244140',
            addressCountry : '中国',
            addressState : '广东省',
            addressCity : '深圳市',
            organization : '灵畅网络',
            title : '前端',
            success : function (res) {
                console.log(res);
            }
        });
    },

    //wifi
    wifi(){
        wx.navigateTo({
            url: '../wifi/wifi'
        })
    },


})