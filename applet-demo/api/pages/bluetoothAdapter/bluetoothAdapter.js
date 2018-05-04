// pages/bluetoothAdapter/bluetoothAdapter.js
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

    //打开蓝牙
    openBluetoothAdapter(){
        wx.openBluetoothAdapter({
            success: function (res) {
                console.log(res)
            }
        })
    },

    //关闭蓝牙
    closeBluetoothAdapter(){
        wx.closeBluetoothAdapter({
            success: function (res) {
                console.log(res)
            }
        })
    },

    //获取本机蓝牙适配器状态
    getBluetoothAdapterState(){
        wx.getBluetoothAdapterState({
            success: function (res) {
                console.log(res)
            }
        })
    },

})