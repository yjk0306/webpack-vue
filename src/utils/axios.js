import axios from 'axios'



axios.interceptors.request.use(req=>{
  req.headers = {
    Expires: '123123123',
    // 'Cache-Control':' max-age=300'
    'Cache-Control':'max-age=200'
  }
  return req
},err => {

})

export function $get (url,query) {
  return new Promise ((resolve, reject) => {
    axios.get(url,{
      params:query
    })
    .then (res=>{
      return resolve(res.data)
    })
    .catch(err=>{
      return reject(err.data)
    })
  })

}

