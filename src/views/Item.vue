<template>
<div class="item">
   <div v-for="item in $store.state.quizlist" :key="item.quizId" v-show="isActive==item.quizId">
      <h2 class="itemquizId">第{{item.quizId}}题</h2>
      <h2 class="itemquizItem">{{item.quizItem}}</h2>
      <ul>
          <li v-for="ans in item.quizAnswer" :key="ans.answerId" @click="chooseAnswer(item.quizId,ans.answerId)" >
              <span class="circle " :class="{choosed:ans.answerId==chooseId}" >{{changeChar(ans.answerId)}}</span>
              {{ans.answerItem}}
          </li>
      </ul>
      <router-link to="/result" v-if="isActive==$store.state.quizlist.length">提交</router-link>
      <a @click="nextQuiz(item.quizId)" v-else >下一题</a>
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
      nextQuiz(id){//判断当前答案是否选了然后跳转到下一题
        if(id==this.$store.state.yourChoose.length){
          this.isActive++;
          this.chooseId=0;
        }else{
            alert("你还没做答呢！");
        }
      },
      changeChar(num){//将答案选项前变成字母
          switch(num){
          case 1 : return "A";break;
          case 2 : return "B";break;
          case 3 : return "C";break;
          case 4 : return "D";break;
      }
      },
     chooseAnswer(index,id){//记录答案
         this.chooseId=id;
         this.$store.state.yourChoose[index-1]=id;
     }
  }
 
}
</script>

<style >
.item{
    color: #fff;
    position: absolute;
    top: 25%;
    left: 40%;
    width: 100px;
    height: 200px;
}
.itemquizId{
    position: absolute;
    top: -50%;
}
.itemquizItem{
    position: absolute;
    top: -30%;
}
li{
   list-style: none; 
   margin-top: 15px;
}
.circle{
    width: 25px;
    height: 25px;
    display: inline-block;
    text-align: center;
    line-height: 25px;
    
    border-radius: 50%;
    background-color: #fff;
    color: #000;
}
.choosed{
    background-color: #f00;
}
a{
    text-decoration: none;
    color: #fff;
    position: absolute;
    bottom: -20%;
}
</style>