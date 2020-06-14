import { myrequest } from '../../request/request.js';
// pages/goods_detail/index.js
Page({

  data: {
    goodsDetail: {}
  },
  // 商品对象
  GoodsInfo:{},

  onLoad: function (options) {
    let {goods_id} = options
    // console.log(goods_id)
    this.getGoodsDetail(goods_id)
  },
  // 获取商品详情数据
  async getGoodsDetail(goods_id){
    let res = await myrequest({
      url:'/goods/detail',
      data: {goods_id}
    })
    console.log(res);
    
    this.setData({
      goodsDetail: res.data.message
    })
  },
  // 加入购物车
     addCart(){
       wx.showToast({
         title: '功能暂无',
       })
  //   console.log('666')
  //   let cart = wx.getStorageInfo('cart') || []
  //   let index = cart.findIndex(v=>v.goods_id===this.GoodsInfo.goods_id)
  //   if(index === -1){
  //     //不存在商品
  //     this.GoodsInfo.num = 1
  //     cart.push(this.GoodsInfo)
  //   }else {
  //     //存在当前商品
  //     cart[index].num++
  //   }
  //   wx.setStorageSync('cart', cart)
  //   wx.showToast({
  //     title: '添加成功',
  //     mask: true
  //   })
     },
  // 购买商品
  buy(){

  }

})