<template>
    <div class="mad-eyes_about-box">
       1233
    </div>
  </template>
  <script setup>
  import { ref, onMounted } from "vue";
  const route = useRoute();
  console.log(route.query.id, "router----router");
  onMounted(async () => {
   // 在组件挂载后发送异步请求获取数据
   const response = await $fetch('https://6566e73564fcff8d730f45d0.mockapi.io/api/article');
   console.log(response, '-responseresponsesouce', data.value, "----", data.value[0].title, data);
   data.value = response;
   });
   useHead({
     title: route.params.id,
   })
  </script>
  <style scoped lang="scss">
  </style>