// 发送请求的次数
let ajaxTimes = 0;
export const myrequest = (params) =>{
  ajaxTimes++
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  //公共url
  const baseurl = 'https://api-hmugo-web.itheima.net/api/public/v1'
  return new Promise((resolve, reject) => {
    
    wx.request({
      ...params,
      url: baseurl + params.url,
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      },
      complete: () => {
        ajaxTimes--
        if(ajaxTimes===0){
          wx.hideLoading()
        }
      }
    })
  })
}

