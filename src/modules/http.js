import Vue from 'vue'

// import qs from 'qs'
import utils from './utils' /* 共用的方法 */
import axios from 'axios'

// url 参数
var weburl
var baseurl
var baseurlproxy

switch(process.env.srconfig){
  case 'pro': // 生产
  baseurl = 'http://mapi.kuaidao.cn'
  weburl = "https://m.kuaidao.cn/"
  break;
  case 'pre': // 预生产
  baseurl = 'http://kdwap-api-pre.kuaidaoapp.com'
  weburl = "http://kuaidaoservice-manager-mobile-pre.kuaidaoapp.com/"
  break;
  case 'test': // 测试
  baseurl = 'http://kdwap-api-test.kuaidaoapp.com',
  weburl = "http://kuaidaoservice-manager-mobile-test.kuaidaoapp.com/"
  break;
  case 'dev': // 开发
  baseurl = 'http://192.168.13.135',
  weburl = 'https://m.kuaidao.cn/'
  break;
  default: // 默认本地开发
  baseurl = '/api'
  // weburl = 'https://m.kuaidao.cn/'
  weburl = "http://kuaidaoservice-manager-mobile-test.kuaidaoapp.com/"
  break;
}
// module.exports = {
//   baseurl
// }
var imurl = '/';
// var imurl = 'http://localhost:3000/webdemo/h5/';

let config = {
  // 聊天
  imSession: imurl + 'im.html#/session',
  imChat:  imurl + 'im.html#/chat/p2p-',
  // 下载
//   downLoadIos: 'https://gio.ren/reXaPx3',
//   downLoadAndroid: 'https://gio.ren/rVYaPnV',
  downLoad:'https://gio.ren/o32N653'
}

Vue.prototype.weburl= weburl
Vue.prototype.baseurl = baseurl
Vue.prototype.baseurlproxy = baseurlproxy
// 处理axios,让组件通过this.$http来使用
Vue.prototype.$http = axios

export default config
// 在请求前从本地存储中获取到 后端需要的字段

// http request 拦截器
axios.interceptors.request.use((config) => {
  var Authorization = utils.getCookie('accesstoken')
  if (!Authorization) {
    return config
  }
  Authorization = 'Bearer ' + Authorization
  config.headers.Authorization = Authorization // 添加sdktoken标识，后台通过判断这个值，来判断是否为登录
  return config
}, (error) => {
  return Promise.reject(err)
})

// http response 拦截器
// axios.interceptors.response.use((response) => {

//   return response;
// },(error) => {
//   if (error && error.response) {
//       console.log( error.response.data.message )
//       switch (error.response.status) {
//           case 400:
//               error.response.statusText = error.response.data.message || "错误请求"
//               break;
//           case 401:
//               utils.clearCookie()
//               error.response.statusText = '请重新登录'
//               break;
//           case 403:
//               error.response.statusText = '拒绝访问'
//               break;
//           case 404:
//               error.response.statusText = '请求错误,未找到该资源'
//               break;
//           case 405:
//               error.response.statusText = '请求方法未允许'
//               break;
//           case 408:
//               error.response.statusText = '请求超时'
//               break;
//           case 500:
//               error.response.statusText = error.response.data.message ||'服务器端出错'
//               break;
//           case 501:
//               error.response.statusText = '网络未实现'
//               break;
//           case 502:
//               error.response.statusText = '网络错误'
//               break;
//           case 503:
//               error.response.statusText = '服务不可用'
//               break;
//           case 504:
//               error.response.statusText = '网络超时'
//               break;
//           case 505:
//               error.response.statusText = 'http版本不支持该请求'
//               break;
//           default:
//               error.response.statusText = `连接错误${error.response.status}`
//   }
//   } else {
//       error.response.statusText = "连接到服务器失败"
//   }
//   utils.mobileTip({
//       "obj":Vue,
//        "width":"7rem",
//        "content":"<div style='font-size:14px'>"+error.response.statusText+"</div>"
//   })
//   return Promise.reject(error.response)
// })
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

// function get(url,data={}){
//     return new Promise((resolve,reject) => {
//       axios.get(url,qs.stringify(data)).then((response) => {
//             resolve(response.data);
//         }).catch((error) => {
//             reject(error)
//         })
//     })
// }

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

// function post(url,data = {}){
//     return new Promise((resolve,reject) => {
//       axios.post(url,qs.stringify(data)).then((response) => {
//             resolve(response.data);
//         },(error) => {
//             reject(error)
//         })
//     })
// }

// Vue.prototype.$get=get;
// Vue.prototype.$post=post;
