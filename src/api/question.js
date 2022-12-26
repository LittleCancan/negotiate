import {axios} from '@/utils/request'

const api = {
  questionPre: '/question'
};

export function getQuizQuestion(data) {
  return axios({
    url:`${api.questionPre}/getQuizQuestion`,
    method: 'GET',
    data
  }).catch((r) => {
    console.log("GetQuizQuestion catch error: ", r)
  })
}