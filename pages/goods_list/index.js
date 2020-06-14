// pages/goods_list/index.js
import { myrequest } from '../../request/request.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodList: [],
    //总页数
    totalPage: 1
  },

  params: {
    query:'',
    cid: '',
    pagenum:1,
    pagesize: 10
  },
  onLoad: function (options) {
    // console.log(options);
    this.params.cid = options.cid
    this.getGoodList()
    
  },
  async getGoodList(){
    
    const res = await myrequest({
      url:'/goods/search',
      data: this.params
    })
    // console.log(res);
    
    this.setData({
      totalPage: Math.ceil(res.data.message.total/this.params.pagesize),
      goodList: [...this.data.goodList,...res.data.message.goods]

    })
    wx.stopPullDownRefresh()
  },
  // 页面上拉触底事件
  onReachBottom(){
    // console.log('6666')
    if(this.params.pagenum >= this.data.totalPage){
      //没有下一页了
      wx.showToast({
        title: '没有更多商品了',
      })
    }else {
      // 有下一页，发起请求
      this.params.pagenum++
      this.getGoodList()
    }
  },
  //下拉刷新事件
  onPullDownRefresh(){
    this.setData({
      goodList:[]
    }),
    this.params.pagenum = 1,
    this.getGoodList()
  }

  
})