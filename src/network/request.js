import axios from "axios"

// export function request(config) {
//   //创建axios实例
//    return new Promise((resolve,reject)=>{
//       const instance =axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//       })
//       instance(config)
//       .then(res=>{
//         resolve(res)
//       })
//       .catch(err=>{
//         reject(err)
//       })
//    })
// }


export function request(config) {
  //创建axios实例
   const instance=axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })


  /* 创建请求拦截器 */
  instance.interceptors.request.use(res=>{
    return res /* 返回请求 */
  },err=>{
    console.log(err);
  })
/*  创建响应拦截器 */
  instance.interceptors.response.use(res=>{
    return res.data;/* 返回响应结果 */
  },err=>{
    console.log(err);
  })
  return instance(config) /* 返回promise */
}

