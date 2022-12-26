import Axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import process from 'process'

// 创建 axios 实例
const service = Axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'http://49.234.60.188:8000' : 'http://localhost:8080',
  withCredentials: true
});
console.log(process.env.NODE_ENV);


const err = (error) => {
  console.log("拦截请求出现 error:",error);
  if (error.response) {
    const data = error.response.data;
    // const token = Vue.ls.get('ACCESS_TOKEN')
    if (error.response.status === 403) {
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000,
        center: true,
        showClose: true
      })
    }
    if (error.response.status === 401 && !(data.result )) {
      Message({
        message: 'Authorization verification failed',
        type: 'error',
        duration: 5 * 1000,
        center: true,
        showClose: true
      })
    }
  }
  return Promise.reject(error)
};

//request interceptor
//拦截请求
service.interceptors.request.use(
  (config) => {
    console.log("------------request interceptor----------");
    console.log("token",store.state.user.token);
    config.headers.token=store.state.user.token;
    // if (localStorage.getItem("token")) {
    //   const token = localStorage.getItem("token");
    //   console.log("TokenFromLocalStore ", token)
    //   requestConfig.headers.token = token;
    // }
    return config
  }, err);

//拦截响应
service.interceptors.response.use((response) => {
  console.log("service.interceptors.response 拦截响应")
  switch (response.status) {
    case 200:
      return response.data;
    case "商量一些其它error码":
      return false;
    //todo 
    //等待后端代码，注册情况交给Register页面分析
    default:
      console.log("拦截响应出现奇怪Error: ",response.data.msg)
  }
},error => {
  if (error && error.response) {
    switch (error.response.status) {
      case 400: error.message = '请求错误'; break;
      case 401: error.message = '未授权，请登录'; break;
      case 403: error.message = '拒绝访问'; break;
      case 404: error.message = `请求地址出错: ${error.response.config.url}`; break;
      case 408: error.message = '请求超时'; break;
      case 500: error.message = '服务器内部错误'; break;
      case 501: error.message = '服务未实现'; break;
      case 502: error.message = '网关错误'; break;
      case 503: error.message = '服务不可用'; break;
      case 504: error.message = '网关超时'; break;
      case 505: error.message = 'HTTP版本不受支持'; break;
      default: break
    }
  }
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000,
    center: true,
    showClose: true
  });
  return Promise.reject(error)    //promise.reject ()方法用于返回具有给定拒绝原因的被拒绝Promise对象
}
);

export {
  service as axios
}
