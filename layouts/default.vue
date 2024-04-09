<template>
   <div>
      <Header></Header>
      <slot />
      <Footer></Footer>
   </div>
</template>
<script setup lang="ts">
import Header from '@/components/header.vue'; // 引入组件 Navbar
import Footer from '@/components/footer.vue'; // 引入组件 Footer
</script>
<style>
@import "~/assets/css/head.css";
@import "~/assets/css/common.css";
@import "~/assets/css/style.css";
*{
    padding: 0;
    margin: 0;
}
ul {
      list-style-type: none; /* 移除无序列表（ul）的默认项目符号 */
      padding: 0;
}
</style>