//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
        /**
         * wx.canIUse(String)  判断小程序的API，回调，参数，组件等是否在当前版本可用
         * String参数说明： 使用${API}.${method}.${param}.${options}或者${component}.${attribute}.${option}方式来调用
         * ${API} 代表 API 名字
         * ${method} 代表调用方式，有效值为return, success, object, callback
         * ${param} 代表参数或者返回值
         * ${options} 代表参数的可选值
         * ${component} 代表组件名字
         * ${attribute} 代表组件属性
         * ${option} 代表组件属性的可选值
          */
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
      //console.log(this.data.canIUse);   //true
      if (app.globalData.userInfo) {
        this.setData({
          userInfo: app.globalData.userInfo,
          hasUserInfo: true
        })
      } else if (this.data.canIUse){
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        // userInfoReadyCallback 在index.js中定义，在app.js中使用
        app.userInfoReadyCallback = res => {
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      } else {
        // 在没有 open-type=getUserInfo 版本的兼容处理
        wx.getUserInfo({
          success: res => {
            app.globalData.userInfo = res.userInfo
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
          }
        })
      }
    },

    /**
     * 获取用户信息
      * @param e
     */
    getUserInfo: function(e) {
      console.log(e)
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    },

    //点击头像跳转到日志
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },

    //获取微信用户的手机号码
    getPhoneNumber: function(e){
      console.log(e);
      console.log(e.detail.errMsg)
      console.log(e.detail.iv)
      console.log(e.detail.encryptedData)
    },

    //跳转到模板消息
    toTemplateMessage: function(){
        wx.navigateTo({
            url: '../templateMessage/templateMessage'
        })
    }

})
