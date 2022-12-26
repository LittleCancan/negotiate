<template>
  <div class="register-card">
    <el-form ref="registerForm" :rules="rules" :model="registerForm"
             size="default">
      <p id="form-title">
      <i class="iconfont iconteamspeak" id="logo"></i>
      用户注册</p>
      <el-form-item prop="username">
        <el-input type="text" v-model="registerForm.username" placeholder="手机号/邮箱">
          <i slot="prepend" class="fa fa-user-circle-o" style="font-size: 18px"><i class="el-icon-user"></i></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="name" id="el-form-item-name">
        <el-input type="text" v-model="registerForm.name" placeholder="用户名">
        <i slot="prepend" class="fa fa-user-circle-o" style="font-size: 16px"><i class="iconfont iconusercenter"></i></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="registerForm.password" placeholder="密码">
            <i slot="prepend" class="fa fa-keyboard-o"  style="font-size: 18px"><i class="el-icon-lock"></i></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="passwordConfirm">
        <el-input type="password" v-model="registerForm.passwordConfirm"
                    placeholder="确认密码">
          <i slot="prepend" class="fa fa-user-circle-o" style="font-size: 16px"><i class="iconfont iconpassword"></i></i>
        </el-input>
      </el-form-item>
      <el-button size="default" @click="submit" type="primary" class="button-register">注册
      </el-button>
      <div class="login-div">
        <el-link id="loginText" type="success" @click="goToLogin">返回登录>></el-link>
      </div>
    </el-form>

  </div>
</template>

<script>
  import { mapActions } from 'vuex'

export default {
    name:'register',
    data(){
      return{
        registerForm: {
          username: '',
          name: '',
          password: '',
          passwordConfirm: '',
          errorMsg:''
        },
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
              if(value.indexOf(" ")!=-1){
                return callback(new Error('邮箱/手机号码格式不正确'))
              }
              return callback()
            },
            trigger: 'blur'
          }],  
          name: [{
            validator: (rule, value, callback) => {
              if (!value) {
                  this.errorMsg='用户名不能为空'
                  return callback(new Error('用户名不能为空'))
              }
              return callback()
            },
            trigger: 'blur'
          }],  
          password: [{
            validator: (rule, value, callback) => {
              if (!value) {
                  this.errorMsg='密码不能为空'
                  return callback(new Error('密码不能为空'))
              }
              return callback()
            },
            trigger: 'blur'
          }],
          passwordConfirm: [{
            validator: (rule, value, callback) => {
              if (!value) {
                  this.errorMsg='确认密码不能为空'
                  return callback(new Error('确认密码不能为空'))
              }
              let password = this.registerForm.password
              if (password && password !== value) {
                  this.errorMsg='密码不一致'
                  return callback(new Error('密码不一致'))
              }
              return callback()
            },
            trigger: 'blur'
          }]
        }  
      }

    },
    mounted(){
      //设置背景色，这种方法方便保险一点
      document.body.style.backgroundColor="#FEFAF3";
    },
    methods:{
      ...mapActions([
          'register'
      ]),
      submit() {
        this.$refs.registerForm.validate((valid) => {
          if (valid) {
              this.register({
                  username: this.registerForm.username,
                  password: this.registerForm.password,
                  name: this.registerForm.name,
              }).then(() => {
                this.$message({
                    message: '注册成功！已为您自动登录～',
                    type: 'success',
                    center: true,
                    showClose: true,
                    duration: 5000
                });
                this.$router.push("/homepage")
              }).catch(err => {
                // Params_error = {'code': 4000, 'msg': '请求参数错误'}
                // User_already_exist = {'code': 4303, 'msg': '用户已存在'}
                this.$message({
                    message: "Register catch Error:"+err.msg,
                    type: 'error',
                    center: true,
                    showClose: true,
                    duration: 5000
                });
              })
          } else {
              // 登录表单校验失败
              if(this.errorMsg!=''){
                  this.$message.error(this.errorMsg)
              }
              else{
                  this.$message.error('表单校验失败')
              }
          }
        })
      },
      goToLogin(){
        this.$router.push("/login")
      }
    }
}
</script>

<style scoped>
.register-card{
    width: 360px;
    height: 470px;
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
#form-title{
    margin-top: 45px;
    margin-bottom: 40px;
}
#logo{
    font-size:23px;
    color: #49CDC8;
    margin-right: 4px;
}
.el-form-item{
  margin-top: 25px;
  margin-bottom: 25px;
  width: 240px;
}
.iconfont{
  font-size: 18px;
}
.el-input-group__prepend{
  padding:0 15px;
}
.button-register{
    margin-top: 10px;
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
.login-div{
    width: 100%;
    height: 25px;
    margin-top: 10px;
}
#loginText{
  color: #20B2AA;
  float: right;
  font-size: 14px;
  position: absolute;
  right: 18px;
}
.el-link.el-link:after{
  color: #20B2AA;
}
</style>