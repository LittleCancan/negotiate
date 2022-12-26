import {
  login,
  register
} from '@/api/user'

const user={
  state:{

  },
  actions:{
    async login(context,data){
      console.log("data:",data);
      let res = await login(data);
      if(res.token){
        localStorage.setItem("token",res.token)
        localStorage.setItem("userInfo",JSON.stringify(res.userInfo))
        //localStorage.setItem("userQuizId",JSON.stringify(res.userInfo.quizFinishedId))
        //localStorage.setItem("userResultId",JSON.stringify(res.userInfo.quizResultId))
      }else{
        console.log("登录失败")
      }
    },
    async register(context,data){
      console.log("data:",data);
      let res = await register(data);
      if(res.token){
        localStorage.setItem("token",res.token)
        localStorage.setItem("userInfo",res.userInfo)
      }else{
        console.log("注册失败")
      }
    }
  },
  mutations:{
    setToken(state,newToken){
      state.token=newToken;
    },
    removeToken(state){
      state.token=null;
    },
    setUserInfo(state,userInfo){
      state.userInfo=userInfo;
    },
    removeInfo(state){
      state.userInfo={};
    },
  }
};
export default user
