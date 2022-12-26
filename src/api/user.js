import {axios} from '@/utils/request'

const api = {
  userPre: '/user'
};

export function login(data) {
  return axios({
    url:`${api.userPre}/login`,
    method: 'POST',
    data
  }).catch((r) => {
    console.log("catch: ", r)
  })
}

export function logout(data) {
  return axios({
    url:`${api.userPre}/logout`,
    method: 'POST',
    data
  }).catch((r) => {
    console.log("catch: ", r)
  })
}


export function register(data) {
  return axios({
    url: `${api.userPre}/register`,
    method: 'POST',
    data
  })
}

//如果login请求直接返回用户信息，存储在store里，则不用这个函数了
export function getUserInfo(id) {
  return axios({
    url: `${api.userPre}/userInfo/?id=`+id,
    method: 'GET'
  });
}

export function updateUserInfo(data) {
  return axios({
    url: `${api.userPre}/userInfo/update`,
    method: 'POST',
    data
  })
}

//如果login请求直接返回用户信息，存储在store里，则不用这个函数了
export function getUserAva(id) {
  return axios({
    url: `${api.userPre}/userInfo/ava?id=`+id,
    method: 'GET'
  })
}
