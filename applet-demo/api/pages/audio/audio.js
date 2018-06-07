// pages/getRecorderManager/getRecorderManager.js
const recorderManager = wx.getRecorderManager();
const innerAudioContext = wx.createInnerAudioContext();
const backgroundAudioManager = wx.getBackgroundAudioManager();

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

    start(){
        let that = this;
        recorderManager.onStart(() => {
            console.log('开始录音')
        })

        recorderManager.onStop((res) => {
            console.log('停止录音', res);
            const { tempFilePath } = res;
            var playSrc = res.tempFilePath;
            that.setData({
                playSrc : playSrc
            });
        })

        // 已录制完指定帧大小的文件，会回调录音分片结果数据。
        // 如果设置了 frameSize ，则会回调此事件
        recorderManager.onFrameRecorded((res) => {
            const { frameBuffer } = res
            console.log('frameBuffer.byteLength', frameBuffer.byteLength)
        })

        const options = {
            duration: 100000,
            sampleRate: 44100,
            numberOfChannels: 1,
            encodeBitRate: 192000,
            format: 'aac',
            frameSize: 50
        }

        recorderManager.start(options)

    },

    pause(){
        recorderManager.onPause(() => {
            console.log('暂停录音')
        })
        recorderManager.pause()
    },

    resume(){
        console.log('继续录音');
        recorderManager.resume()
    },

    stop(){
        let that = this;
        recorderManager.stop();
        recorderManager.onStop((res)=>{
          console.log('停止录音');
          console.log(res);
          const { tempFilePath } = res;
          var playSrc = res.tempFilePath;
          that.setData({
              playSrc : playSrc
          });
        });
    },

    playStart(){
        innerAudioContext.autoplay = false;
        innerAudioContext.src = this.data.playSrc;
        innerAudioContext.play();
        innerAudioContext.onPlay(() => {
            console.log('开始播放')
        })
        innerAudioContext.onError((res) => {
            console.log(res.errMsg)
            console.log(res.errCode)
        })
    },

    playPause(){
        innerAudioContext.pause();
    },

    playPause(){
        innerAudioContext.pause();
    },

    playStop(){
        innerAudioContext.stop();
    },

    playSeek(){
        innerAudioContext.seek(10);
        innerAudioContext.onSeeked((res)=>{
          console.log('音频完成 seek 操作事件');
          console.log(res);
        });
    },

    playBackgroundAudio(){
        backgroundAudioManager.title = '此时此刻'
        backgroundAudioManager.epname = '此时此刻'
        backgroundAudioManager.singer = '许巍'
        backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
        backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46' // 设置了 src 之后会自动播放
    }

})