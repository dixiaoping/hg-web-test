<template>
    <div class="index-box">
        <div v-for="item in data" :key="item.id" class="child-ele">
            <img :src="'https://d1smal4jgs4o4g.cloudfront.net/product/list/p-'+ item.id + '.png'"> 
            <p>{{ item.title }}</p> 
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue'
const data = useState('mountains', () => null);
onServerPrefetch(async () => {
      // 组件作为初始请求的一部分被渲染
      // 在服务器上预抓取数据，因为它比在客户端上更快。
      let mountains = await $fetch("https://6566e73564fcff8d730f45d0.mockapi.io/api/list");
      
      data.value = mountains;
      var newUrl = "https://sg-public-api.hoyoverse.com/event/social_sea_share/redirectUrl?key=m20221207hy23gf7k74&lang=en-us&game_biz=bh3_global&title_key=share_title&url=https://act.hoyoverse.com/bh3/event/e20230116community/index.html?game_biz=bh3_global&hyl_presentation_style=fullscreen&hyl_auth_required=true&hyl_hide_status_bar=true&utm_source=share&medium=link&utm_medium=facebook&utm_campaign=web&img_url=https://act-upload.hoyoverse.com/event-ugc/2024/04/07/131309399/d48b9ba0c8f062a76ebcad51f0a06d78_2676718167285014697.png&desc_key=share_desc&timeStamp=5708258";
      var newUrl_n = "https://sg-public-api.hoyoverse.com/event/social_sea_share/redirectUrl?key=m20221207hy23gf7k74&lang=en-us&game_biz=bh3_global&title_key=share_title&url=https://act.hoyoverse.com/bh3/event/e20230116community/index.html?game_biz=bh3_global&hyl_presentation_style=fullscreen&hyl_auth_required=true&hyl_hide_status_bar=true&utm_source=share&medium=link&utm_medium=facebook&utm_campaign=web&img_url=https://act-upload.hoyoverse.com/event-ugc/2024/04/07/131309399/62b85d5f2ebde9fbbadb7f879a13f12e_8064585250830369223.png&desc_key=share_desc&timeStamp=5708264"
      // var localUrl = "http://localhost:3007/faq"
      var localUrl = "http://172.18.2.83:1024/login?redirect=%2Findex"
      // 使用fetch发送GET请求获取网页内容
      await $fetch(localUrl)
        .then(response => {
          // 检查响应状态码
          if (response.ok) {
            // 将响应转换为文本
            return response.text();
          }
          console.log(response, "11111");
          // throw new Error('Network response was not ok.');
        })
        .then(html => {
          // 打印网页内容
          console.log(html);
        })
        .catch(error => {
          // 捕获并处理错误
          console.error('There was a problem with the fetch operation:', error);
        });
    }
)
onMounted(async () => {
  // 在组件挂载后发送异步请求获取数据
  const response = await $fetch('https://6566e73564fcff8d730f45d0.mockapi.io/api/list');
  console.log(response, '-responseresponsesouce', data.value, "----", data.value[0].title, data);
  data.value = response;
});
</script>
<style scoped lang="scss">
.index-box{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .child-ele{
    width: 30%;
    height: auto;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    flex-wrap: wrap;
    padding: 30px 0;
    background-color: #f8f8f8;
    img{
        width: auto;
        height: 300px;
        margin-bottom: 20px;
    }
    p{  
        width: 100%;
        font-size: 20px;
        line-height: 1.2;
        text-align: center;
    }
  }
}

</style>