<template>
<div>
   <div v-for="item in $store.state.quizlist" :key="item.quizId" v-show="isActive==item.quizId">
      <h2>第{{item.quizId}}题</h2>
      <h2>{{item.quizItem}}</h2>
      <ul>
          <li v-for="ans in item.quizAnswer" :key="ans.answerId" @click="chooseAnswer(ans.answerId)" >
              <span class="circle " :class="{choosed:ans.answerId==chooseId}" >{{changeChar(ans.answerId)}}</span>
              {{ans.answerItem}}
          </li>
      </ul>
      <router-link to="/result" v-if="isActive==$store.state.quizlist.length">提交</router-link>
      <a @click="nextQuiz" v-else >下一题</a>
  </div>
</div>
  
</template>

<script>

export default {
  name:'Item',
  data(){
      return{
          isActive:1,//判断当前是第几题
          chooseId:0//选中的id
      }
  },
  methods:{
      nextQuiz(){//跳转到下一题
        this.isActive++;
        this.chooseId=0;
      },
      changeChar(num){//将答案选项前变成字母
         switch(num){
             case 1 : return "A";break;
             case 2 : return "B";break;
             case 3 : return "C";break;
             case 4 : return "D";break;
         }
      },
     chooseAnswer(id){//记录答案
         this.chooseId=id;
         this.$store.state.yourChoose.push(id);
     }
  }
 
}
</script>

<style>
li{
   list-style: none; 
}
.circle{
    width: 25px;
    height: 25px;
    display: inline-block;
    text-align: center;
    line-height: 25px;
    border: 0.5px solid #ccc;
    border-radius: 50%;
    background-color: #fff;
}
.choosed{
    background-color: #f00;
}
</style>