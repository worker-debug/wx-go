// pages/cart/index.js
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
  //添加收货地址
  addAdress(){
   wx.getSetting({
     success: (res) => {
       console.log(res);
       let scope = res.authSetting['scope.address']
       if(scope===true || scope===undefined){
         wx.chooseAddress({
           success: (res) => {
            console.log(res);
            
           },
         })
       }else {
         wx.openSetting({
           success: (res) => {
             console.log(res);
             wx.chooseAddress({
              success: (res) => {
               console.log(res);
               
              },
            })
           }
         })
       }
     },
   })
  }

  
})