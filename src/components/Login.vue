<template>
    <div class="login-div">
        <div class="pic-div">
            <img src="../assets/pic/login.png" id="pic" alt="登录页面图片">
        </div>
        <div class="login-card">
            <el-form ref="loginForm" label-position="top" :rules="rules" :model="formLogin"
                     size="default"  @submit.native.prevent>
                <p id="form-title">
                    <i class="iconfont iconteamspeak" id="logo"></i>
                    谈判能力测试系统</p>
                <el-form-item prop="username">
                    <el-input type="text" v-model="formLogin.username" placeholder="手机/邮箱">
                        <i slot="prepend" class="fa fa-user-circle-o" style="font-size: 16px"><i class="el-icon-user"></i></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="formLogin.password" placeholder="密码">
                        <i slot="prepend" class="fa fa-keyboard-o"><i class="el-icon-lock"></i></i>
                    </el-input>
                </el-form-item>
                <div class="register-div">
                  <el-link id="registerText" type="success" @click="goToRegister">点击注册>></el-link>
                </div>
                <el-button size="default" @click="submit" type="primary"  native-type="submit" class="button-login">登录
                </el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: "login",
    data(){
      return{
        formLogin: {
          username: '',
          password: ''
        },
        // 校验规则
        rules: {
          username: [{
            validator: (rule, value, callback) => {
              if (!value) {
                this.errorMsg='手机/邮箱不能为空'
                return callback(new Error('手机/邮箱不能为空'))
              }
              let reg = /^([^@]+@[^@]+\.[^@]+)$/

              let phone=/^1(3|4|5|6|7|8|9)\d{9}$/
              if(!phone.test(value)){
                //不能匹配手机号码
                if (!reg.test(value)) {
                  //不能匹配邮箱
                  this.errorMsg='手机/邮箱号码格式不正确'
                  return callback(new Error('邮箱/手机号码格式不正确'))
                }
              }
              return callback()
            },
            trigger: 'blur'
          }],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    mounted(){
      //设置背景色，这种方法方便保险一点
      document.body.style.backgroundColor="#FEFAF3";
    },
    methods:{
      ...mapActions([
        'login'
      ]),
      /**
       * @description 提交登录信息
       */
      submit () {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            this.login({
              username: this.formLogin.username,
              password: this.formLogin.password
            }).then(() => {
                this.$router.push("/homepage")
            }).catch(err => {
              this.$message({
                  message: "Login catch Error:"+err.msg,
                  type: 'error',
                  center: true,
                  showClose: true,
                  duration: 5000
              });
            })
          } 
          //else {
          //  this.$message.error('手机号/邮箱,密码验证失败')
          //}
        })
      },
      goToRegister(){
        this.$router.push("/register")
      }
    },
    
  }
</script>

<style scoped>

.login-div{
    width: 700px;
    height: 400px;
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    border-radius: 10px;
    background-color: white;
    justify-content: center;
    border: 1px solid #EBEEF5;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
.pic-div{
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#pic{
   width: 90%;
}
#logo{
    font-size:23px;
    color: #49CDC8;
    margin-right: 4px;
}
.login-card{
    width: 250px;
    padding: 50px 50px 20px 0;
}
#form-title{
    margin-top: 35px;
    margin-bottom: 35px;
}
.el-input-group__prepend{
  padding:0 15px;
}
.el-form-item{
  margin-top: 22px;
  margin-bottom: 12px;
}
.button-login{
  margin-top: 15px;
}
.el-button--primary.is-active,
.el-button--primary:active {
    background: #20B2AA;
    border-color: #20B2AA;
    color: #fff;
}
.el-button--primary:focus,
.el-button--primary:hover {
    background: #48D1CC;
    border-color: #48D1CC;
    color: #fff;
}
.el-button--primary {
    color: #FFF;
    background-color: #20B2AA;
    border-color: #20B2AA;
}
.register-div{
    width: 100%;
    height: 25px;
    width: 240px;
}
#registerText{
  color: #20B2AA;
  float: right;
  font-size: 14px;
}


</style>