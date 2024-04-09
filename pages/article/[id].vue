<template>
    <div>
        <h1>{{ title }}</h1>
        <div>
            {{ articleContent[0].content }}
        </div>
    </div>
</template>
<script  setup>
import { ref } from "vue";
const title = ref('');
const route = useRoute();
const articleContent = useState('mountains', () => null);

onServerPrefetch(async () => {
    // 组件作为初始请求的一部分被渲染
    // 在服务器上预抓取数据，因为它比在客户端上更快。
    let mountains = await $fetch("https://6566e73564fcff8d730f45d0.mockapi.io/api/article");
    articleContent.value = mountains;
  }
)
useHead({
  title: route.params.id,
})
</script>