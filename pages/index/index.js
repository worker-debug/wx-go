import { myrequest } from '../../request/request.js';
// pages/auth/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图
    swiperData: [],
    // 导航数据
    cateList: [],
    // 楼层的数据
    floordata: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperData()
    this.getCateList()
    this.getFloordata()
  },
  // 获取首页轮播数据
  async getSwiperData(){
    const res = await myrequest({
      url: '/home/swiperdata'})
    this.setData({
    swiperData: res.data.message
    })
    
  },
  // 获取导航区数据
  async getCateList(){
    const res = await myrequest({
      url: '/home/catitems'})
    this.setData({
      cateList: res.data.message
    })
  },
  // 获取楼层的数据
  async getFloordata(){
    const res = await myrequest({
      url: '/home/floordata'})
      // console.log(res);
      
    this.setData({
      floordata: res.data.message
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
