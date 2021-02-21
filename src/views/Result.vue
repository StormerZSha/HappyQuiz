<template>
  <div class="result"> 
      <div class="grade">
        <span>得分：{{result}}</span>
      </div>      
  </div>
</template>

<script>
export default {
   name:'Result',
   data(){
       return{
           result:0
       }
   },
   methods:{
     yourResult(){
         console.log(this.$store.state.yourChoose);
         console.log(this.$store.state.trueAnswer)
         for(let i=0;i<this.$store.state.yourChoose.length;i++){
             if(this.$store.state.yourChoose[i]==this.$store.state.trueAnswer[i]){
                 this.result+=20;
             }
         }
     }
   },
   created(){
            this.yourResult();    
   }
   

}
</script>

<style>
 .result{
     color: #fff;
 }
 .grade{
     width: 338px;
     height: 364px;
     background-image: url('../assets/grade.png');
     position: relative;
     left: 50%;
     margin-left: -180px;
     margin-top: 40px;
 }
 .grade span{
     color: #000;
     position: absolute;
     bottom: 20%;
     left: 35%;
     font-size: 30px;
 }
</style>