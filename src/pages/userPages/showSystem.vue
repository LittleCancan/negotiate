<template>
  <div class="content-div">
    <div class="introduce1">
      <div class="intro-pic">
        <img src="@/assets/pic/intro-pic.png" alt="介绍图片"/>
      </div>
      <div class="intro-text">
        <div class="text">
          <p>{{introduceMsg1}}</p>
          <p>{{introduceMsg2}}</p>
        </div>
        <el-button type="primary" plain @click="goToQuiz">开始测试 >></el-button>
      </div>
    </div>
    <div class="introduce2">
      <div class="intro-div">
        <p class="title"><i class="el-icon-menu"></i>系统介绍</p>
        <p class="intro-content">{{sysIntro}}</p>
      </div>
      <div class="intro-div">
        <p class="title"><i class="el-icon-s-data"></i>测试维度</p>
        <p class="intro-content">{{sysIntro}}</p>
        <img src="@/assets/pic/analytics.png" alt="测试维度" id="quizImg"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"showSystem",
  data(){
    return{
      introduceMsg1:"每个人每天几乎都会有谈判的情况发生，不管你喜欢与否，你都是一位谈判者。谈判能力是从事推销、采购、公关、教育、咨询、管理等工作必备的素质。\n",
      introduceMsg2:"通过完成本系统中精心设计的测试题目，你可以获得专业的分析，该分析能够帮助你更好的掌握自身现阶段的谈判能力水平，有效了解自己的谈判能力等级，从而在相关学习中查缺补漏，有针对性的提升自己的谈判能力。",
      sysIntro:"啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦。"
    }
  },
  methods:{
    goToQuiz(){
      this.$router.push("/homepage/quizLibrary")
    }
  }
}
</script>

<style scoped>
.content-div{
  width: 100%;
}
.introduce1{
  width: 100%;
  height: 450px;
  background-color: #20B2AA;
  display: flex;
  align-items: center;
  box-shadow:2px 3px 4px #8b8a8a;
}
.intro-pic{
  margin-left: 10%;
  width: 40%;
  height: 350px;
  background-color: white;
  display: flex;
  align-items: center;;
  justify-content: center;
}
.intro-pic img{
  width: 85%;
  height: auto;
}
.intro-text{
  margin-right: 10%;
  margin-left: 5%;
  width: 33%;
  height: 330px;
  padding-top: 20px;
}
.text{
  width: 100%;
  text-align: left;
  font-size: 18px;
  color: white;
  line-height: 2;
  /*开头空两格*/
  text-indent:2em;     
  white-space: pre-wrap;  
  /*只允许显示8行，超出隐藏并加省略号*/
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  overflow: hidden;
}
.el-button{
  margin-top: 25px;
  width: 130px;
  height: 45px;
  font-size: 17px;
}
/* 下面一系列都是设置按钮颜色 */
.el-button--primary.is-plain {
    color: rgb(84, 82, 82);
    background: #ffefd4;
    border: 1.5px solid #ffcd50
}
.el-button--primary.is-plain:focus,
.el-button--primary.is-plain:hover {
    color: black;
    background: #ffe5a2;
    border: 2px solid #ffcd50;
}
.introduce2{
  width: 70%;
  margin: auto;
  display: inline-block;
}
.intro-div{
  height: auto;
  width: 100%;
  margin: 40px 10px 40px 0px;
/*     
  padding: 15px 15px;
  border-left: 4.5px solid #20B2AA; 
  background-color: #e7fffd;
  */
}
/* .intro-div:nth-child(1){
  padding-bottom: 12px;
  border-bottom: 2.5px dashed #20B2AA;
} */
.intro-div:last-child{
  padding-bottom: 50px;
}
.title{
  color: #20B2AA;
  width: 100%;
  font-size: 18px;
  text-align: left;
  margin-bottom: 6px;
  font-weight: 600;
  padding-bottom: 5px;
  padding-left: 3px;
  border-bottom: 1.7px solid #9dccc9;
}
.intro-content{
  width: 100%;
  text-align: left;
  font-size: 17px;
  color: black;
  line-height: 2;
  text-indent:2em;
  white-space: pre-wrap;
}
.intro-div i{
  margin-right: 5px;
  width: 20px;
  height: 20px;
}
#quizImg{
  margin-top: 30px;
  width: 500px;
  height: auto;
}
</style>