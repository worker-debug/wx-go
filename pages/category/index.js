// pages/category/index.js
import { myrequest } from '../../request/request.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左侧分类菜单
    leftMenu: [],
    // 右侧分类数据
    rightContent: [],
    currentIndex: 0,
    scrollTop:0
  },
  // 接口返回数据
  cateData: [],


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const  cateData = wx.getStorageSync('cates')
    if(!cateData){
      this.getCate()
    }else {
      // 旧数据是否过期
      if(Date.now()-cateData.time>1000*10){
        this.getCate()

      }else {
        // 可以用缓存的数据
        this.cateData = cateData.data
        let leftMenu = this.cateData.map(v=>v.cat_name)
        let rightContent = this.cateData[0].children
        this.setData({
          leftMenu,
          rightContent
        })
      }
    }
  },
  // 获取分类数据
  async getCate(){
    const res = await myrequest({
      url: '/categories'})
    
      this.cateData = res.data.message
      // 把缓存存入进去
      wx.setStorageSync('cates', {time:Date.now(),data:this.cateData})
      let leftMenu = this.cateData.map(v=>v.cat_name)
      let rightContent = this.cateData[0].children
      this.setData({
        leftMenu,
        rightContent
      })
    
  },
  // 点击大菜单事件
  handleTap(e){
    // console.log(e);
    let {index} = e.currentTarget.dataset;
    this.setData({
      currentIndex: index,
      rightContent:this.cateData[index].children,
      scrollTop:0
    })
    // this.setData({
    //   rightContent:this.cateData[index].children
    // })
    
  },

 
})