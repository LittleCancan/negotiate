<template>
  <div class="quizCard-container">
    <el-card class="card" shadow="always">
      <div class="title">
        <p><i class="el-icon-discount"></i>{{quiz.quizName}}</p>
      </div>
      <div class="content">
        <p><b class="text-bold">发布人：</b>{{quiz.publisher}}</p>
        <p><b class="text-bold">测试时长：</b>{{quiz.estimatedTimeCost}}min</p>
        <p><b class="text-bold">发布日期：</b>{{quiz.gmtPublish}}</p>
        <p id="description"><b class="text-bold">测试描述：</b>{{quiz.description}}</p>
      </div>
      <div class="detail">
        <span @click="getQuizDetail">查看详情</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name:"quizCard",
  props:['quiz'],
  mounted(){
  },
  methods:{
    getQuizDetail(){
      console.log("传入id:",this.quiz.quizId)
      this.$router.push({
            name:'quizDetail',
            params:{
                id:this.quiz.quizId,
                quiz:this.quiz
            }
        })
    }
  }
}
</script>

<style scoped>
.card{
  width: 240px;
  height: 270px;  
  text-align: left;
}
/* 强行设置el-card的padding */
.card /deep/ .el-card__body{
  padding: 20px 25px;
}
.title{
  font-size: 16px;
  border-bottom: 1px solid rgb(199, 199, 199);
  padding-bottom: 8px;
  font-weight: 700;
}
.title i{
  margin-right: 3px;
  font-size: 21px;
  color: #20B2AA;
  transform: rotate(180deg);    /* 把这个小突变旋转了180度，看起来合适一点 */
  position: relative;
  top: 3px;
}
.content{
  margin-top: 15px;
  font-size: 14px;
  line-height: 2;
  font-weight: 500;
}
.text-bold{
  color: #0a857e;
  font-weight: 500;
}
/* 控制行数只能两行 */
#description{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.detail{
  width: 100%;
  height: 20px;
  font-size: 14px;
  text-align: right;
  margin-top: 25px;
  color: #0a857e;
  /* 鼠标变成小手 */
  cursor: pointer;
  opacity: 0.9;
}
.detail span:hover{
  opacity: 1;
  color: #20B2AA;
}
</style>