<template>
  <div class="content-div">
    <div class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item class="bread-text-f" :to="{path:'/homepage/quizLibrary'}"><i class="el-icon-document"></i>题库</el-breadcrumb-item>
        <el-breadcrumb-item class="bread-text-l" v-if="isQuizDetail">{{selectedQuizName}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="quizList" >
      <QuizCard v-for="quiz in quizList" :key="quiz.id" :quiz="quiz"></QuizCard>
    </div>
  </div>
</template>

<script>
import QuizCard from '@/components/card/quizCard.vue';

export default {
  name:"quizLibrary",
  components:{QuizCard},
  data(){
    return{
      isQuizDetail:false,
      selectedQuizName:"啊啊啊啊",
      quizList:[
        {
          quizId:"0000001",
          quizName:"测试1号",
          description:"这个测试是做什么的呢？今天小编就带大家来看一下这个测试到底是怎么回事。其实呢这就是一个测试，测试大家都知道是怎么回是，那么到这里相信大家都已经了解了，事情就是这个样子的，小编也很吃惊。谢谢大家的观看。",
          questionList:["01","02","03","04","05","06"],
          quizDoneNumber:329,
          creator:"赵某婵",
          publisher:"赵某婵",
          gmtPublish:"2022.8.27",
          estimatedTimeCost:17,
        },
        {
          quizId:"0000002",
          quizName:"测试2号",
          description:"这个测试是做什么的呢？今天小编就带大家来看一下这个测试到底是怎么回事。谢谢大家的观看。",
          questionList:["01","02","03","04","05","06","07","09","10"],
          quizDoneNumber:329,
          creator:"赵某婵",
          publisher:"赵某婵",
          gmtPublish:"2022.8.27",
          estimatedTimeCost:23,
        },
        {
          quizId:"0000003",
          quizName:"测试3号",
          description:"这个测试是做什么的呢？今天小编就带大家来看一下这个测试到底是怎么回事。其实呢这就是一个测试，测试大家都知道是怎么回是，那么到这里相信大家都已经了解了，事情就是这个样子的，小编也很吃惊。谢谢大家的观看。这个测试是做什么的呢？今天小编就带大家来看一下这个测试到底是怎么回事。其实呢这就是一个测试，测试大家都知道是怎么回是，那么到这里相信大家都已经了解了，事情就是这个样子的，小编也很吃惊。谢谢大家的观看。",
          questionList:["01","02","03"],
          quizDoneNumber:329,
          creator:"赵某婵",
          publisher:"赵某婵",
          gmtPublish:"2022.8.26",
          estimatedTimeCost:6,
        },
        {
          quizId:"0000004",
          quizName:"测试4号",
          description:"这个测试是做什么的呢？今天小编就带大家来看一下这个测试到底是怎么回事。其实呢这就是一个测试，测试大家都知道是怎么回是，那么到这里相信大家都已经了解了，事情就是这个样子的，小编也很吃惊。谢谢大家的观看。",
          questionList:["01","02","03","04","05","06","01","02","03","04","05","06","01","02","03","04","05","06"],
          quizDoneNumber:329,
          creator:"赵某婵",
          publisher:"赵某婵",
          gmtPublish:"2022.8.25",
          estimatedTimeCost:30,
        },
        {
          quizId:"0000005",
          quizName:"测试5号",
          description:"这个测试是做什么的呢？今天小编就带大家来看一下这个测试到底是怎么回事。其实呢这就是一个测试，测试大家都知道是怎么回是，那么到这里相信大家都已经了解了，事情就是这个样子的，小编也很吃惊。谢谢大家的观看。",
          questionList:["01","02","03","04","05","06","01","02","03","04","05","06"],
          quizDoneNumber:329,
          creator:"赵某婵",
          publisher:"赵某婵",
          gmtPublish:"2022.8.23",
          estimatedTimeCost:20,
        }
      ]
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
  margin-bottom: 30px;
  padding-bottom: 5px;
  border-bottom: 2px solid rgb(176, 176, 176);
}
.bread-text-f{
  cursor: pointer;
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
  font-size: 18px;
  font-weight: normal;
  color: black;
  position: relative;
  top: 7px;
}
.bread-text-l /deep/ .el-breadcrumb__inner:hover{
  font-size: 18px;
  font-weight: normal;
  color: black;
  position: relative;
  top: 7px;
}
/* 设置面包屑分隔符的大小 */
.bread-text-f /deep/ .el-breadcrumb__separator{
  font-size: 20px;
}
.bread i{
  margin-right: 5px;
}
/* 采用了display的grid布局 */
.quizList{
  width: 100%;
  height: 600px;
  display: grid;
  grid-template-columns:  32% 32% 32%;
  grid-template-rows: 45% 45%;
  grid-gap: 40px 31px;
  justify-items:stretch;
  align-items:center;
}
</style>