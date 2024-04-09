<template>
  <div class="mad-eyes_product">
    <div class="product-container">
      <picture class="product-container-banner">
        <source
          media="(max-width: 767px)"
          srcset="https://d1smal4jgs4o4g.cloudfront.net/product/p1-m.jpg"
        />
        <img
          decoding="async"
          src="https://d1smal4jgs4o4g.cloudfront.net/product/p1.jpg"
        />
      </picture>
      <div class="product-box animation-item">
        <p class="product-box_desc">HOAL</p>
        <h2 class="product-box_title product-banner-title">
          Staring at the Peak
        </h2>
      </div>
    </div>
    <div class="product-container product-floor2-container pc-meida">
        <video id="product-video"  muted webkit-playsinline playsinline preload="auto" loop name="media" class="pc-meida">
          <source src="https://d1smal4jgs4o4g.cloudfront.net/product/list/p2.mp4" type="video/mp4">
        </video>
        <div class="product-box product-floor2-text1">
           <h2 class="product-box_title">Super Strong Burst</h2>
        </div>
        <div class="product-box-desc1 product-floor2-desc1">
           <div class="product-box-desc1-con">
              <p>
                A revolutionary vaping solution QUAQ MESH, a flavour-burst mesh coil, delivers an ultimate taste experience.
              </p>
           </div>
        </div>   
        <div class="product-box product-floor2-text2">
           <h2 class="product-box_title">Upgraded with 1.2 Ω Atomisation Core</h2>
        </div>
        <div class="product-box_bottom product-floor2-desc2">
            <p class="product-box_desc">Unlock a new realm of satisfaction for the 1.2 Ω atomisation core delivers unparalleled vapour production and intensified flavours.</p>
        </div>
    </div>
    <!-- mobile -->
    <div class="product-container product-floor2-container mobile-meida">
        <video muted webkit-playsinline playsinline preload="auto" loop name="media" autoplay>
          <source src="https://d1smal4jgs4o4g.cloudfront.net/product/list/p2-1-m.mp4" type="video/mp4">
        </video>
        <div class="product-box animation-item">
           <h2 class="product-box_title">Super Strong Burst</h2>
           <p class="product-box_desc m-product-box_desc">
              A revolutionary vaping solution QUAQ MESH,a flavour-burst mesh coil, delivers an ultimatetaste experience.
            </p>
        </div>
    </div>
    <!-- mobile -->
    <div class="product-container product-floor2-container mobile-meida">
        <video   muted webkit-playsinline playsinline preload="auto" loop name="media" autoplay>
          <source src="https://d1smal4jgs4o4g.cloudfront.net/product/list/p2-2-m.mp4" type="video/mp4">
        </video>  
        <div class="product-box animation-item">
           <h2 class="product-box_title">Upgraded with 1.2 Ω Atomisation Core</h2>
           <p class="product-box_desc m-product-box_desc">
           Unlock a new realm of satisfaction for the 1.2 Ω atomisation core delivers unparalleled vapour production and intensified flavours.
          </p>
        </div>
    </div>

    <div class="product-container">
      <picture class="product-container-banner">
        <source
          media="(max-width: 767px)"
          srcset="https://d1smal4jgs4o4g.cloudfront.net/product/p3-m.jpg"
        />
        <img
          decoding="async"
          src="https://d1smal4jgs4o4g.cloudfront.net/product/P3.jpg"
        />
      </picture>
      <div class="product-box-f3">
        <div class="product-box-f3-text animation-item">
          <h2 class="product-box_title product-p3-title">
            Unique Charm of Each HOAL Device
          </h2>
          <p class="product-box_desc">
            Get swept away by sleek HOAL devices, each with its captivating and
            exclusive fluid texture.
          </p>
        </div>
      </div>
    </div>
    <div
      class="swiper-container product_swiper-container"
      ref="productSwiperContainer"
    >
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in goodsList"
          :key="index"
        >
          <img
            :src="
              'https://d1smal4jgs4o4g.cloudfront.net/product/list/bg-' +
              (index + 1) +
              '.jpg'
            "
            class="p-bg-img"
          />
          <div class="swiper-slide-goods" ref="swiperSlideGoods">
            <img
              :src="
                'https://d1smal4jgs4o4g.cloudfront.net/product/list/p-' +
                (index + 1) +
                '.png'
              "
              class="p-goods-img"
            />
            <div class="swiper-slide-goods_title">{{ item.title }}</div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination product-pagination_swiper"></div>
      <div class="p-center-desc-pc" ref="pCenterDescPc">
        <div class="p-center-content">
          <div
            class="p-center-content-title p-center-content-common animation-item"
          >
            Be the first to experience the explosive flavors
          </div>
          <div
            class="p-center-content-desc p-center-content-common animation-item"
          >
            A variety of 20 flavours awaits you, making your taste buds dance
            whit joy and indulging in pure, authentic pleasure.
          </div>
          <div class="p-center-content-color">
            <ul class="p-center-color-ul">
              <li
                :class="
                  'p-li-color' + (index == currentColorIndex ? ' active' : '')
                "
                v-for="(item, index) in goodsList"
                :key="index"
                :style="'background:#' + item.color"
                @click="currentColorClick(index)"
              ></li>
            </ul>
          </div>
          <div
            class="p-center-content-bottom p-center-content-common animation-item"
          >
            Pineapple Ice
          </div>
        </div>
      </div>
      <div class="p-center-desc-mobile p-center-mobile-box">
        <div
          class="p-center-content-title p-center-content-common animation-item"
        >
          Be the first to experience the explosive flavors
        </div>
        <div
          class="p-center-content-desc p-center-content-common animation-item"
        >
          A variety of 20 flavours awaits you, making your taste buds dance whit
          joy and indulging in pure, authentic pleasure.
        </div>
      </div>
    </div>
  </div>
  <div class="product-container product-floor4-container">
    <picture class="product-container-banner">
      <source
        media="(max-width: 767px)"
        srcset="https://d1smal4jgs4o4g.cloudfront.net/product/p5-m.jpg"
      />
      <img
        decoding="async"
        src="https://d1smal4jgs4o4g.cloudfront.net/product/P5.jpg"
      />
    </picture>
    <div class="product-box animation-item">
      <h2 class="product-box_title">Parameters</h2>
      <div class="product-floor4-content">
        <div>
          <p class="product-floor4-content_title">84 × 27 × 21 mm</p>
          <p class="product-floor4-desc">Size</p>
        </div>
        <div>
          <p class="product-floor4-content_title">20 mg/ml</p>
          <p class="product-floor4-desc">Nicotine Strength</p>
        </div>
        <div>
          <p class="product-floor4-content_title">2.0 ml</p>
          <p class="product-floor4-desc">E-liquid Capacity</p>
        </div>
        <div>
          <p class="product-floor4-content_title">Up to 600</p>
          <p class="product-floor4-desc">Puffs</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script  setup>
  import { ref, onMounted, reactive } from "vue";
  definePageMeta({
    title: "Some Page",
  });
  useHead({
    title: "Some Page1111",
  });
  const swiperSlideGoods = ref();
  const pCenterDescPc = ref();
  const productSwiperContainer = ref();
  const currentColorIndex = ref(0);
  const coolVideo = ref();
  const mySwiper = ref();
  const productFloor2Text1 = ref();
  const productFloor2Desc1 = ref();
  const productFloor2Text2 = ref();
  const productFloor2Desc2 = ref();
  const productFloor2Container = ref();

  const goodsList = reactive([
    {
      color: "ffed69",
      title: "Pineapple Ice",
    },
    {
      color: "ffc0b8",
      title: "Cherry Ice",
    },
    {
      color: "c1d6eb",
      title: "Blueberry Sour Raspberry",
    },
    {
      color: "f05e50",
      title: "Watermelon Ice",
    },
    {
      color: "fcef75",
      title: "Lemon Lime",
    },
    {
      color: "a7dbad",
      title: "Menthol",
    },
    {
      color: "f2c8cd",
      title: "Pink Lemonade",
    },
    {
      color: "ffee71",
      title: "Mango Ice",
    },
    {
      color: "b3d177",
      title: "Kiwi Passion Fruit",
    },
    {
      color: "ffed83",
      title: "Yellow Pear Ice",
    },
    {
      color: "f9a082",
      title: "Pineapple Mojito",
    },
    {
      color: "add2e1",
      title: "P&B",
    },
    {
      color: "8dd1b0",
      title: "Rinbo",
    },
    {
      color: "f0a999",
      title: "Peach Ice",
    },
    {
      color: "a4c9e3",
      title: "Washington Mint",
    },
    {
      color: "b4d480",
      title: "Apple Peach",
    },
    {
      color: "f27eb3",
      title: "Strawberry RaspberryCranberry",
    },
    {
      color: "ee584b",
      title: "Red Apple Ice",
    },
    {
      color: "714c4a",
      title: "Cola",
    },
    {
      color: "8379cc",
      title: "Mexico Berries",
    },
    {
      color: "b7d2ed",
      title: "Blue Razz Lemonade",
    },
    {
      color: "988bca",
      title: "Georgia Grapes",
    },
    {
      color: "f26154",
      title: "Watermelon Lemon",
    },
    {
      color: "f0c4ca",
      title: "Strawberry Ice",
    },
    {
      color: "9f88d3",
      title: "Grape",
    },
  ]);
  function initPcGoodsColor() {
    const goodsModel = gsap.timeline({ default: { duration: 2 } });
    goodsModel
      .fromTo(
        swiperSlideGoods.value,
        {
          x: "60%",
        },
        {
          x: "0",
        }
      )
      .fromTo(
        pCenterDescPc.value,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        "<"
      );
    ScrollTrigger.create({
      animation: goodsModel,
      trigger: productSwiperContainer.value,
      start: "2200px top",
      end: "2500px",
      scrub: true,
    });
  };
  function currentColorClick(index) {
    currentColorIndex.value = index;
    mySwiper.value?.slideTo(index, 0);
  };
  function handleLoadedMetadata(event) {
    const isPad = window.innerWidth < 1200 ? true : false;
    initVideoGsap(coolVideo.value.duration, isPad);
  };
  function initVideoGsap(duration, isPad) {
    const tl = gsap.timeline({ default: { duration: 2 } });
    const end_distance = "+=2500px";
    console.log(tl, "999999000-----");
    tl.to(coolVideo.value, {
      paused: true,
      currentTime: 0,
      ease: "none",
      duration: 8,
    });
    tl.to(
      [productFloor2Text1.value, productFloor2Desc1.value],
      { duration: 1.3, opacity: 1 },
      "<=1.8"
    );
    tl.to(
      [productFloor2Text1.value, productFloor2Desc1.value],
      { duration: 1, opacity: 0 },
      ">+=1"
    );
    tl.to(
      [productFloor2Text2.value, productFloor2Desc2.value],
      { duration: 1, opacity: 1 },
      ">+=0.3"
    );
    var sticky_top = isPad ? "-56px" : "-70px";
    ScrollTrigger.create({
      animation: tl,
      trigger: productFloor2Container.value,
      start: sticky_top + "top",
      end: end_distance,
      pin: true,
      scrub: true,
      onUpdate: function (self) {
        const progress = self.progress;
        const currentTime = duration * progress; // 根据滚动进度计算视频当前时间
        coolVideo.value.currentTime = currentTime; // 设置视频播放进度      console.log(swiperSlideGoods.value, pCenterDescPc.value);
      },
    });
  };
  function initMobileSwiper(){
      // 产品模块轮博配置
      const isPad = window.innerWidth < 1200 ? true : false;
      mySwiper.value = new Swiper(productSwiperContainer.value, {
        allowTouchMove: isPad,
        // autoplay: isPad,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
      });
  };
  onMounted(async () => {
    await initMobileSwiper();
    await initPcGoodsColor();
  });
</script>
<style lang="scss" scoped>
.pin-spacer {
  background-color: #000;
}
.mad-eyes_product {
  width: 100%;
  height: auto;
  background-color: #000;
}
.product-container {
  width: 100%;
  height: calc(100vh - 70px);
  position: relative;
  z-index: 2;
}
.product-floor4-container{
  min-height: calc(100vh - 70px);
  height: auto;
  display: flex;
  background-color: #000;
}
.product-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.product-box-f3 {
  position: absolute;
  top: 0;
  bottom: 0;
  height: auto;
  left: 50%;
  width: 50%;
  box-sizing: border-box;
  margin: auto;
  max-width: 37.5vw;
  display: flex;
  align-items: center;
}
.product-box-f3-text {
  padding-right: 40px;
}
.product-box-f3-text .product-box_title {
  text-align: left;
}
.product-box-f3-text .product-box_desc {
  margin-top: 20px;
  text-align: left;
  color: #fff;
}
.product-p3-title {
  width: 100%;
}
.product-floor1-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.product-box {
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  box-sizing: border-box;
  margin: auto;
  text-align: center;
}
.product-floor1-box{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10%;
  width: calc(100% - 80px);
  max-width: 1440px;
  box-sizing: border-box;
  margin: auto;
  text-align: left;
}
.product-floor1-box .product-banner-title, .product-floor1-box .product-box_desc{
  text-align: left;
}
.product-box-floor4{
  width: calc(100% - 80px);
  max-width: 1440px;
  box-sizing: border-box;
} 
.product-container-banner {
  width: 100%;
  height: 100%;
}
.product-box_bottom {
  position: absolute;
  bottom: 80px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  max-width: 800px;
  color: #fff;
  font-size: 24px;
  line-height: 1.25;
}
.product-box-desc1 {
  position: absolute;
  bottom: 0;
  top: 0;
  margin: auto;
  width: 50%;
  padding-left: 40px;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  opacity: 0;
}
.product-box-desc1-con {
  width: calc(100% - 40px);
  max-width: 720px;
}
.product-box-desc1-con p {
  width: 480px;
  font-size: 24px;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 12px;
}
.product-box-desc1-con .learn-more {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  font-size: 20px;
  line-height: 1.2;
  font-weight: normal;
  color: #fff;
  border-bottom: 1px solid #fff;
}
.product-box-desc1-con .learn-more a {
  color: #fff;
}
.learn-more .icon-arrow-left-new {
  transform: scale(-1);
  margin-left: 16px;
}
.product-box_desc {
  font-size: 24px;
  line-height: 1.2;
  text-align: center;
}
.product-banner-title-first{
  font-size: 40px;
}
.product-box_title {
  font-weight: 500;
  font-size: 4.1vw;
  line-height: 1;
  text-align: center;
  color: #fff;
}
.product-banner-title {
  color: #000;
}
.product-floor2-container {
  line-height: 0;
}
.product-floor2-container video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.product-floor2-text1,
.product-floor2-desc1,
.product-floor2-text2,
.product-floor2-desc2 {
  opacity: 0;
}
/* product */
.product_swiper-container {
  width: 100%;
  height: calc(100vh - 70px);
  position: relative;
  z-index: 2;
  overflow: hidden;
}
.product_swiper-container .p-bg-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-slide-goods {
  position: relative;
  z-index: 1;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.p-goods-img {
  width: auto;
  height: 70vh;
}
.p-center-desc-pc {
  --height: calc(100vh - 190px);
  --width: calc(var(--height) + (var(--height) * 0.093));
  max-width: 50%;
  max-height: var(--height);
  position: absolute;
  width: var(--width);
  height: var(--height);
  right: 60px;
  box-sizing: border-box;
  top: 0;
  bottom: 0;
  z-index: 1;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000;
  opacity: 0;
}
.p-center-desc-mobile,
.swiper-slide-goods_title,
.swiper-pagination {
  display: none;
}
/*  */
.p-center-content {
  padding: 0 4.6vw;
  color: #ffffff;
  text-align: center;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
.p-center-content-common {
  width: 100%;
}
.p-center-content-title {
  font-size: 2.6vw;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 32px;
}
.p-center-content-desc {
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 2.9vw;
}
.p-center-content-color {
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 2.9vw;
}
.p-center-content-bottom {
  font-size: 20px;
}
.p-li-color {
  width: 24px;
  height: 24px;
  box-sizing: border-box;
  border-radius: 50%;
  cursor: pointer;
}
.p-center-color-ul {
  width: 420px;
  display: grid;
  grid-template-columns: repeat(10, 1fr); /* 将容器分成10等分 */
  grid-gap: 20px; /* 定义列之间的间隔为 20px */
}
.p-center-color-ul .active {
  border: 2px solid #fff;
}
.product-floor4-content {
  width: calc(100% - 80px);
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  color: #fff;
}
.product-floor4-content_title {
  font-size: 24px;
}
.product-floor4-desc {
  padding-top: 5px;
  font-size: 14px;
  color: #999;
}
.product-floor4-banner-img{
  width: 100%;
  height: auto;
}
@media (min-width: 1921px) {
  .product-box_title{
    font-size: 80px
  }
  .p-center-content-title{
     font-size: 50px
  }
  .p-center-content{
    padding: 0 60px;
  }
}
@media (max-width: 1200px) {
  .product-container {
    height: calc(100vh - 56px);
  }
  .product-floor4-container{
    height: auto;
    min-height: calc(100vh - 56px);
  }
  .product_swiper-container {
    height: auto;
  }
  .product_swiper-container .swiper-slide {
    min-height: calc(100vh - 56px);
  }

  .swiper-pagination {
    display: block;
    font-size: 16px;
    color:#333;
  }
  .p-center-desc-pc {
    display: none;
  }
  .swiper-slide-goods {
    height: auto;
    align-items: flex-start;
  }
  .p-goods-img {
    width: auto;
    height: 45vh;
  }
  .swiper-slide-goods_title {
    width: 100%;
    height: auto;
  }
  .swiper-slide-goods_title {
    padding-top: 24px;
    color: #333333;
    font-size: 24px;
    line-height: 1.2;
    text-align: center;
    font-weight: 500;
  }

  .p-center-desc-mobile {
    z-index: 1;
    display: block;
    padding: 0 40px;
    width: 100%;
    color: #333333;
    text-align: center;
    padding-top: 100px;
    /* margin-bottom: 62px; */
    padding-bottom: 62px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  .swiper-slide-goods .p-center-desc-mobile {
    display: none;
  }
  .p-center-content-title {
    font-size: 40px;
    height: auto;
    margin-bottom: 16px;
  }
  .p-center-content-desc {
    font-size: 20px;
    color: #333333;
    line-height: 1.2;
    margin-bottom: 0;
  }
  .swiper-slide-goods_title {
    display: block;
    margin-bottom: 30px;
  }
  .swiper-pagination {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
}
@media (max-width: 768px) {
  .m-product-box_desc{
    color: #fff;
    margin-top: 20px;
    line-height: 1.3;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .product-floor1-box {
    width: 100%;
    top: 64px;
    font-size: 64px;
    text-align: center;
  }
  .product-floor1-box .product-banner-title, .product-floor1-box .product-box_desc{
    text-align: center;
  }
  .product-box {
    top: 64px;
    font-size: 64px;
  }
  .product-box_title {
    padding: 0 20px;
    box-sizing: border-box;
    font-size: 64px;
  }
  .product-box-desc1 {
    bottom: 48px;
    width: 100%;
    left: 0;
    right: 0;
    padding: 0 20px;
    height: auto;
    justify-content: center;
    align-items: flex-end;
  }
  .product-box-desc1-con p {
    width: 100%;
    text-align: center;
    font-size: 20px;
  }
  .product-box-f3-text {
    padding: 0;
  }
  .product-box-f3 {
    width: 100%;
    left: 0;
    right: 0;
    top: 64px;
    align-items: flex-start;
  }
  .product-box-f3-text .product-box_title {
    text-align: center;
  }
  .product-box-f3-text .product-box_desc {
    margin-top: 20px;
    text-align: center;
    color: #fff;
    padding: 0 20px;
  }
  .product-floor4-container {
    background-color: #000;
  }
  .product-banner-title-first{
    font-size: 32px;
  }
}
@media (max-width: 767px) {
  .product-box{
    top: 72px;
  }
  .product-box-f3{
    max-width: 100%;
  }
  .product-box_desc {
    padding: 0 20px;
    font-size: 16px;
  }
  .product-banner-title-first {
    font-size: 26px;
  } 
  .product-floor4-content {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (max-width: 414px) {
  .product-floor4-content {
    width: calc(100% - 40px);
  }
  .product-floor4-content_title {
    font-size: 18px;
  }
  .product-floor4-content div {
    margin-bottom: 20px;
  }
  .p-goods-img {
    height: 40vh;
  }
  .product-box {
    font-size: 40px;
  }
  .product-box_title {
    padding: 0 20px;
    font-size: 36px;
    line-height: 1.3;
  }
  .p-center-desc-mobile {
    padding: 0 20px;
    padding-top: 62px;
    padding-bottom: 50px;
  }
  .p-center-content-title {
    font-size: 28px;
    margin-bottom: 12px;
  }
  .product-box-desc1 {
    bottom: 28px;
  }
  .product-box_bottom {
    bottom: 40px;
  }
  .product-box_desc {
    padding: 0 20px;
    font-size: 16px;
  }
  .product-box-desc1-con p {
    font-size: 16px;
  }
  .p-center-content-desc {
    font-size: 16px;
    line-height: 1.2;
  }
  .product-banner-title-first{
    font-size: 26px;
    font-weight: 400;
  }
}

</style>