import Vue from 'vue';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';

// 引入 Swiper 样式文件
import 'swiper/swiper-bundle.css';

// 使用所需的 Swiper 模块
SwiperCore.use([Navigation, Pagination, Autoplay]);

Vue.use(SwiperCore);
