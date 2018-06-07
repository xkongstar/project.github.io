// pages/video/video.js
function getRandomColor () {
    let rgb = []
    for (let i = 0 ; i < 3; ++i){
        let color = Math.floor(Math.random() * 256).toString(16)
        color = color.length == 1 ? '0' + color : color
        rgb.push(color)
    }
    return '#' + rgb.join('')
}
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
        this.videoContext = wx.createVideoContext('myVideo')
    },

    inputValue: '',

    bindInputBlur: function(e) {
        this.inputValue = e.detail.value
    },

    bindSendDanmu: function () {
        this.videoContext.sendDanmu({
            text: this.inputValue,
            color: getRandomColor()
        })
    },

    statechange(e) {
        console.log('live-player code:', e.detail.code)
    },
    error(e) {
        console.error('live-player error:', e.detail.errMsg)
    },

    chooseVideo(){
        let that = this;
        wx.chooseVideo({
            success:function (res) {
                that.setData({
                    src: res.tempFilePath
                })
            },
            fail:function (res) {
                console.log(res);
            },
        })
    }

})