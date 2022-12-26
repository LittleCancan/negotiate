<template>
  <div class="content-div">
    <div class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item class="bread-text-f" :to="{path:'/homepage/quizLibrary'}"><i class="el-icon-document"></i>题库</el-breadcrumb-item>
        <el-breadcrumb-item class="bread-text-l" >{{quiz.quizName}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="quiz-div">
      <div class="pic">
        <img v-if="quiz.quizId === '0000001'" src="@/assets/pic/boy.png" id="quiz-pic"/>
        <img v-else src="@/assets/pic/girl.png" id="quiz-pic"/>
        <p>用户昵称</p>
      </div>
      <div class="quiz-intro">
        <p><b>测试名称：</b>{{quiz.quizName}}</p>
        <p><b>发布人：</b>{{quiz.publisher}}</p>
        <p><b>发布时间：</b>{{quiz.gmtPublish}}</p>
        <p><b>测试描述：</b>{{quiz.description}}</p>
        <p  style="color:red"><b style="color:black">题目数量：</b>{{quiz.questionList.length}}</p>
        <div class="button-div">
          <el-button type="primary" @click="goToStartQuiz">开始测试</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import QuizCard from '@/components/card/quizCard.vue';

export default {
  name:"quizDetail",
  props:['id','quiz'],
  mounted(){
    console.log("进入quizDetail页面")
    console.log("quiz:",this.quiz)
  },
  components:{},
  methods:{
    goToStartQuiz(){
      this.$router.push({
            name:'doQuiz',
            params:{
                id:this.quiz.quizId,
            }
        })
    }
  }
}
</script>

<style scoped>
.content-div{
  width: 60%;
  min-width: 850px;
  height: 750px;
  margin: 0 auto;
}
.bread{
  width: 100%;
  height: 35px;
  margin-top: 80px;
  margin-bottom: 25px;
  padding-bottom: 5px;
  border-bottom: 2px solid rgb(176, 176, 176);
}
/* 修改面包屑选中和hover时的颜色，用到了一种deep手法 */
.bread-text-f /deep/ .el-breadcrumb__inner{
  font-size: 27px;
  font-weight: bold;
  color: black;
}
.bread-text-f /deep/ .el-breadcrumb__inner:hover{
  font-size: 27px;
  font-weight: bold;
  color: #20B2AA;
}
.bread-text-l /deep/ .el-breadcrumb__inner{
  font-size: 20px;
  font-weight: normal;
  color: black;
  position: relative;
  top: 5px;
}
.bread-text-l /deep/ .el-breadcrumb__inner:hover{
  font-size: 20px;
  font-weight: normal;
  color: black;
  position: relative;
  top: 5px;
}
/* 设置面包屑分隔符的大小 */
.bread-text-f /deep/ .el-breadcrumb__separator{
  font-size: 20px;
}
.bread i{
  margin-right: 5px;
}
.quiz-div{
  width: 100%;
  background-color: rgba(255,255,255,0.8);
  box-shadow: 1px 1px 8px #888888;
  border-radius: 8px;
  border-right: 2px solid #9dccc9;
  position:relative;
  overflow: hidden;
}
.pic{
  width: 32%;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #20B2AA;
  flex-direction: column;
  margin-bottom: -10000px;
  padding-bottom: 10000px;
}
#quiz-pic{
  width: 75%;
  border-radius: 50%;
  height: auto;
  position: relative;
  margin-top: 100px;
}
.quiz-intro{
  width: 60%;
  float:left;
  text-align: left;
  font-size: 16px;
  line-height: 2.2em;
  padding: 40px 20px 30px 35px;
  margin-bottom: -10000px;
  padding-bottom: 10000px;
}
.button-div{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
.el-button{
  width: 160px;
  height: 52px;
  font-size: 20px;
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
</style>