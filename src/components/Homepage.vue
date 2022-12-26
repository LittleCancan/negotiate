<template>
  <div>
    <div class="header">
        <div class="box">
            <h1>
                <i class="iconfont iconteamspeak" id="logo"></i>
                <span>谈判能力测试系统</span>
            </h1>
            <nav>
                <router-link active-class="active" to="/homepage/showSystem"><i class="el-icon-house"></i>首页</router-link>
                <router-link active-class="active" to="/homepage/quizLibrary"><i class="el-icon-document"></i>题库</router-link>
                <router-link active-class="active" to="/homepage/userResult"><i class="el-icon-medal"></i>我的成绩</router-link>
            </nav>
        </div>
        <div class="ava">
            <img src="@/assets/pic/ava.jpg" id="avaImg">
        </div>
    </div>
    <div class="contents">
        <div class="content">
            <!--指定组件的位置-->
            <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'homapage',
}
</script>

<style scoped>
.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    background-color:#20B2AA;
    color: #fff;
    /*吸顶效果*/
    position: sticky;
    position: -webkit-sticky;  
    top: 0px;   
    border-bottom: 1px solid rgba(216, 191, 216, 0.614);             
    z-index:999;
}
.box{
    display: flex;
    align-items: center;
    padding-left: 10%;
}
#logo{
    font-size:28px;
    color: #fff; 
    margin-right: 10px;
}
h1{
    display: flex;
    align-items: center;
    font: normal 25px Cookie, Arial, Helvetica, sans-serif;
}
img{
    width: 40px;
    height: 40px;
}
nav {
    display: flex;
    align-items: center;
    margin-left: 40px;
    height: 58px;
    font:18px Arial, Helvetica, sans-serif;
    padding-bottom: 2px;
}
nav a{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    height: 60px;
    text-decoration:none;
    color: #EDE3D2;
    font-size: 16px;
    font-weight: normal;
    opacity: 0.8;
}
nav a:hover {
    opacity: 1;
}
a i{
  margin-right: 5px;
  margin-top: 2px;
}
.active {
    color: #EDE3D2;
    pointer-events: none;
    background-color: #23a8a1;
    border-bottom: 3.5px solid #EDE3D2;
    opacity: 1;
}
.ava{
  margin-right: 40px;
  display: flex;
  justify-content: center;
}
#avaImg{
  width: 44px;
  height: 44px;
  border-radius: 22px;
  overflow: hidden;
}
.contents{
    display: flex;
    justify-content: center;
}
.content{
    display: flex;
    width: 100%;
    background-color: #fffcf5;
}
</style>