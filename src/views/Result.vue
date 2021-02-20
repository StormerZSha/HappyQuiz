<template>
  <div>
      你的选择是：{{$store.state.yourChoose}}
      
      得分：{{result}}
      <button @click="yourResult">查看得分</button>
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
   

}
</script>

<style>

</style>