<template>
  <div class="question-contend">
    <div class="hint">
      <div class="countdown">
        <i class="el-icon-time"></i>剩余时间：
          <Countdown :time="time" format="hh:mm:ss" @on-end="onCountdownEnd">
            <template slot-scope="{ time }">{{ time }}</template>
          </Countdown>
        
      </div>
      <div class="sumitButton">
        <el-button type="primary">交卷</el-button>
      </div>
    </div>
    <div class="question-board">
      <component v-for="question in questionList" :key="question.id" :is="textChoice"/>
    </div>
  </div>
</template>

<script>
import textChoice from '@/components/card/textChoice.vue';
import Countdown from '@choujiaojiao/vue2-countdown'

export default {
  name:"doQuiz",
  components:[textChoice,Countdown],
  props:["id"],
  data(){
    return{
      currentQuestion:"textChoice",
      time:30,
      questionList:[
        {
          questionId:"000000001",
          type:"textChoice",
          description:"",
          question_content_url:"",
          estimated_time_cost:30
        }
/*         {
          questionId:"000000002",
          type:"audioChoice",
          description:"",
          question_content_url:"",
          estimated_time_cost:60
        },
        {
          questionId:"000000003",
          type:"textSummary",
          description:"",
          question_content_url:"",
          estimated_time_cost:120
        } */
      ]
    }
  },
  mounted(){
    console.log("Countdown",Countdown)
  },
  methods: {
    onCountdownEnd() {
    // 倒计时结束的逻辑
      console.log('countdown end~')
    }
  }
}
</script>

<style scoped>
.question-contend{
  width: 60%;
  min-width: 850px;
  height: 630px;
  margin: 0 auto;
  margin-top: 60px;
}
.question-board{
  width: 100%;
  height: 520px;
  background-color: rgba(255,255,255,0.8);
  box-shadow: 1px 1px 8px #888888;
  border-radius: 8px;
  position:relative;
  overflow: hidden;
}
.hint{
  width: 100%;
  height: 45px;
}
.countdown{
  float: left;
  font-size: 18px;
  padding-top: 7px;
  padding-left: 10px;
}
.countdown i{
  color: #20B2AA;
  margin-right: 5px;
}
.sumitButton{
  float: right;
  padding-right: 10px;

}
.el-button{
  width: 70px;
  height: 35px;
  font-size: 16px;
  display: flex; 
  justify-content: center;
  align-items:center;
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
