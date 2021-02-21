<template>
  <div class="home">
     <h2>努力学习的你来做个测试吧!</h2>
     <router-link to="/item" tag="button">开始</router-link>
  </div>
</template>

<script>

export default {
  name: 'Home',
 
}
</script>
<style scoped>
   .home{
     position: absolute;
     top: 30%;
     left: 40%;
     margin-left:-150px ;
   }
   .home h2{
     color: #fff;
     font-size: 30px;
   }
   button{
     width: 100px;
     height: 40px;
     color: #fff;
     background-color: #5e5e5e;
     position: absolute;
     left: 50%;
     margin-left: -50px;
     top:120px;
   }
</style>
