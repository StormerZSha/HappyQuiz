import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    yourChoose:[],
    quizlist:[
      {
        quizId:1,
        quizItem:"1+1=?",
        quizAnswer:[
          {
            answerId:1,
            answerItem:"0",
            isTrue:false
          },
          {
            answerId:2,
            answerItem:"1",
            isTrue:false
          },
          {
            answerId:3,
            answerItem:"2",
            isTrue:true
          },
          {
            answerId:4,
            answerItem:"3",
            isTrue:false
          }
        ]
      },
      {
        quizId:2,
        quizItem:"1-1=?",
        quizAnswer:[
          {
            answerId:1,
            answerItem:"0",
            isTrue:true
          },
          {
            answerId:2,
            answerItem:"1",
            isTrue:false
          },
          {
            answerId:3,
            answerItem:"2",
            isTrue:false
          },
          {
            answerId:4,
            answerItem:"3",
            isTrue:false
          }
        ]
      }
    ],
    trueAnswer:[3,1]
  },
  getters:{
  },
  mutations: {
    
  },
  actions: {
  },
  modules: {
  }
})
