<template>
  <div class="mad-eyes_about-box">
    <div class="mad-eyes_about about-floor1" ref="aboutFloor1">
      <div class="about-container">
        <h2 class="about-content-title about-content-text" ref="aboutTitle">
          Be extreme or be nothing
        </h2>
          <video muted webkit-playsinline playsinline preload="auto" loop autoplay name="media" class="pc-meida about-container_img" ref="aboutImg">
              <source src="https://d1smal4jgs4o4g.cloudfront.net/about/about-bannerp.mp4" type="video/mp4">
          </video>
          <video muted webkit-playsinline playsinline preload="auto" loop name="media" autoplay class="mobile-meida about-container_img" ref="mobileAboutImg">
              <source src="https://d1smal4jgs4o4g.cloudfront.net/about/about-bannerm.mp4" type="video/mp4">
          </video>
        <p class="about-content-desc about-content-text" ref="aboutContentText">
          We won‘t urge you to challenge yourself, because challenges are an
          integral part of our existence. We don't need to ignite your passion;
          it flows relentlessly from within you.
        </p>
      </div>
    </div>
    <!-- floor 2 -->
    <div class="mad-eyes_about about-floor2">
      <div class="about-floor2-img about-floor2-item">
        <img
          src="https://mad-eyes-test.s3.us-west-2.amazonaws.com/about/about-avatar.jpg"
        />
      </div>
      <div class="about-foor2-text about-floor2-item">
        <h2 class="title animation-item">Brand Story</h2>
        <p class="about-floor2-item_desc animation-item">
          Our story begins with those whose hearts beat with an unyielding
          passion, and whose determination borders on obsession. We pay homage
          to those who face adversity head-on, and those whose inner flames
          never flicker.
        </p>
        <p class="about-floor2-item_desc animation-item">
          At Mad Eyes, we firmly believe life unleashes fiery sparks of passion
          only when you push yourself to extremes, and your dedication verges on
          the brink of madness. For us, vapes are not just a pleasure; they're a
          release of fervor. They symbolize a crazy obsession with goals, a
          rejection of mediocrity, an unapologetic way of life.
        </p>
        <p class="about-floor2-item_desc animation-item">
          Mad Eyes personifies resolute determination bonded with near-maniacal
          zeal. We see that life truly finds meaning only in the realms of
          obsession and fervor. When you choose Mad Eyes, you're not merely
          selecting a product; you're embracing a passionate way of life and a
          zealous attitude. We call to fellow zealots to join us.
        </p>
      </div>
    </div>
    <!-- floor 3 -->
    <div class="about-floor3-container" ref="aboutFloor3">
      <div class="mad-eyes_about about-floor3 swiper-container" ref="swiper">
        <div class="about-floor3-box swiper-wrapper">
          <div class="about-floor3-item swiper-slide">
            <img
              src="https://mad-eyes-test.s3.us-west-2.amazonaws.com/about/p3-1.jpg"
            />
            <h2 class="title">Extreme</h2>
            <p class="about-floor3-item_desc">
              Mad Eyes epitomizes the extremes. We are driven by a relentless
              pursuit of excellence, refusing to be confined by traditional
              boundaries. Our mission is to ignite extraordinary moments that
              transcend the ordinary.
            </p>
          </div>
          <div class="about-floor3-item swiper-slide">
            <img
              src="https://mad-eyes-test.s3.us-west-2.amazonaws.com/about/p3-3.jpg"
            />
            <h2 class="title">Fervor</h2>
            <p class="about-floor3-item_desc">
              Our vapes go beyond mere enjoyment; they embody a release of
              intense passion and dedication. With Mad Eyes, you are declaring
              your commitment to living life to the fullest, without compromise.
            </p>
          </div>
          <div class="about-floor3-item swiper-slide">
            <img
              src="https://mad-eyes-test.s3.us-west-2.amazonaws.com/about/p3-2.jpg"
            />
            <h2 class="title">Unleashed</h2>
            <p class="about-floor3-item_desc">
              Mad Eyes empowers kindred spirits to unleash their inner fervor.
              To embrace challenges with overflowing passion, confidence, and
              unbreakable spirits as they reach far beyond the extraordinary.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script  setup>
import { ref, onMounted } from "vue";
// import Swiper from "swiper";
// import "swiper/swiper-bundle.css"; // 引入 Swiper 样式
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

definePageMeta({
  title: "about Page",
});
useHead({
  title: 'Some Page2222',
})
const swiper = ref();
const aboutTitle = ref();
const aboutImg = ref();
const mobileAboutImg = ref();
const aboutContainer = ref();
const aboutContentText = ref();
const aboutFloor1 = ref();
const aboutFloor3 = ref();
onMounted(() => {
  // 初始化 Swiper
  gsap.registerPlugin(ScrollTrigger);
  const  swiperWidth = window.innerWidth < 768;
  new Swiper(swiper?.value, {
    slidesPerView: swiperWidth ? 1.5 : 3.6,
    spaceBetween: swiperWidth ? 20 : 56,
    freeMode: true,
    resistanceRatio: 0, // 取消边界阻力
    breakpoints: {
      768: {
        slidesPerView: 2.1,
        spaceBetween: 36,
      },
      414: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3.6,
        spaceBetween: 56,
      },
    },
  });
  //
  const isMobile = window.innerWidth < 768;
  let aboutFImgWidth = "25%";
  let aboutFImgHeight = aboutFImgWidth;
  let aboutFImgStart = "0px";
  let aboutFirstPadding = "0 40px";
  if (isMobile) {
    aboutFirstPadding = "0 20px";
    aboutFImgWidth = "50%";
    aboutFImgHeight = "50%";
    aboutFImgStart = "-100px";
  }
  const tl = gsap.timeline({ default: { delay: 0.3 } });
  isMobile && tl.to(aboutTitle?.value, { display: "block", height: 0, opacity: 0, marginTop:0  });
  tl.fromTo(
    isMobile ? mobileAboutImg.value : aboutImg?.value,
    { width: "100%", height: "100%" },
    {
      width: aboutFImgWidth,
      height: aboutFImgHeight,
      duration: 3,
      ease: "linear",
    }
  );
  isMobile && tl.to(
      aboutTitle?.value,
      { 
        marginTop: "26px",
        height: "auto",
        y: 0,
        duration: 2,
        opacity: 1,
        marginBottom: "24px",
        transformOrigin: "center center",
      },
      "<=2.6"
    );
  tl.fromTo(
    aboutContainer.value,
    { maxWidth: "100%", padding: "0" },
    {
      maxWidth: "1440px",
      duration: 2,
      padding: aboutFirstPadding,
      ease: "linear",
    },
    "<-=1"
  );
  tl.to([aboutContentText?.value, aboutTitle?.value], { display: "block" });
  tl.to([aboutContentText?.value, aboutTitle?.value], {
    y: 0,
    duration: 2,
    opacity: 1,
  });
  ScrollTrigger.create({
    animation: tl,
    trigger: aboutFloor1?.value,
    start: aboutFImgStart + "top",
    end: "+=1500px",
    scrub: true,
    pin: true,
    markers: true,
  });

  ScrollTrigger.create({
    trigger: aboutFloor3.value,
    animation: gsap.fromTo(
      aboutFloor3.value,
      {
        x: "22%",
      },
      {
        x: 0,
        duration: 2,
      }
    ),
    start: "-300px top",
    end: "-140px",
    scrub: true,
  });
});
  // 轮播

</script>
<style scoped lang="scss">
.mad-eyes_about-box{
  width: 100%;
  background-color: #000;
  position: relative;
  z-index: 2;
  position: relative;
  overflow: hidden;
}
.mad-eyes_about{
 width: 100%;
 min-height: calc(100vh - 70px);
 height: auto;
}
.about-floor1{
  max-height: calc(100vh - 70px);
}
.about-container{
  justify-content: center;
}
.about-container{
  width: 100%;
  height: calc(100vh - 70px);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 100%;
}  
.about-foor2{
  background-color: #ccc;
}
.about-container_img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin:0 auto;
} 
.about-content-text{
  width: 37.5%;
  display: none;
  opacity: 0;
  color: #fff;
  box-sizing: border-box;
  transform: translateY(300px);
}
.about-content-title{
  padding-right: 16px;
  width: 37.5%;
  font-size: 4.1vw;
  line-height: 1;
  font-weight: 500;
  opacity: 0;
  text-align: left;
} 
.about-content-desc{
  padding-left: 16px;
  width: 37.5%;
  font-size: 20px;
  opacity: 0;
} 
.about-floor2{
 max-width: 1440px;
 width: calc(100% - 80px);
 margin: 0 auto;
 box-sizing: content-box;
 display: flex;
 align-items: center;
 justify-content: space-between;
}
.about-floor3{
  padding-top: 5vh;
  min-height: calc(100vh - 70px);
  height: auto;
  max-width: 1440px;
  width: calc(100% - 80px);
  // overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.about-floor2-item{
  width: 50%;
  box-sizing: border-box;
}
.about-floor2 .title{
   width: 100%;
   height: auto;
}
.about-floor2 .about-floor2-img{
  padding: 5vh 0;
  padding-right: 24px;
  position: relative;
  height: auto;
}
.about-floor2 .about-floor2-img img{
  margin: auto;
  width: 100%;
  height: auto;
  object-fit: cover;
}
.about-floor2 .about-foor2-text{
  padding-left: 2.9vw;
}
.about-foor2-text .title{
  font-size: 4.1vw;
  color: #FFFFFF;
  line-height: 1;
  margin-bottom: 3.3vw;
}
.about-floor2-item_desc{
  font-size: 1.25vw;
  color: #FFFFFF;
  line-height: 1.2;
  margin-bottom: 20px;
}
.about-floor2-item_desc:last-of-type{
  margin-bottom: 0px;
}
.about-floor3-container{
  width: 100%;
  padding-bottom: 5vh;
  padding-top: 5vh;
  overflow: hidden;
  transform: translateX(22%);
}
.about-floor3-item img{
  width: 100%;
  height: auto;
  object-fit: cover;
}
.about-floor3{
  padding-top: 5vh;
  min-height: calc(100vh - 70px);
  height: auto;
  max-width: 1440px;
  width: calc(100% - 80px);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.about-floor3-item .title{
  color:#fff;
  font-size: 2.6vw;
  margin-bottom: 1vw;
}
.about-floor3-item_desc{
  color:#999999;
  font-size: 20px;
  line-height: 1.25;
}
.about-floor3-box{
 width: 100%; 
 height: auto;
 margin: auto;
}
@media (min-width: 1921px) {
  .about-content-title{
     font-size: 78px
  }
  .about-floor2-item_desc{
    font-size: 24px;
  }
}
@media (max-width: 1200px) {
  .about-floor2-item_desc{
     font-size: 1.6vw
  }
}
@media (max-width: 767px) {
  .about-floor1{
    max-height: calc(100vh - 56px);
  }
  .mad-eyes_about{
     height: calc(100% - 56px);
     min-height: calc(100vh - 56px);
  }
  .about-container{
     display: block;
  }
  .about-floor2-item_desc{
     font-size: 2vw;
  }
  .about-content-title{
     width: 100%;
     font-size: 40px;
     height: auto;
     text-align: center;
     padding-right: 0;
     transform: translateY(80px);
  }
  .about-floor2 .about-floor2-img{
    padding:0;
  }
  .about-content-desc{
     width: 100%;
     font-size: 20px;
     line-height: 1.2;
     text-align: center;
     padding-left: 0;
     padding-top: 24px;
  }
  .about-floor2{
    display: block;
    margin-top: 20px;
  }
  .about-floor2 .about-floor2-img{
     padding-right: 0;
     width: 100%;
     margin: 0 auto;
  }
  .about-floor2 .about-foor2-text{
     width: 100%;
     padding: 0;
     text-align: center;
  }
  .about-floor2-item_desc{
     font-size: 20px;
     line-height: 1.2;
  }
  .about-foor2-text .title{
     font-size: 56px;
     padding-top: 16px;
  }
  .about-floor3{
     padding-top: 20px;
     margin-left: 20px;
     min-height: 50vh;
     width: calc(100% - 20px); 
     margin-bottom: 16px;
  }
  .about-floor3-item .title{
    padding-top: 24px;
    font-size: 24px;
    margin-bottom: 12px;
  }
}
@media (max-width: 414px) {
  .about-floor2{
    margin-bottom: 40px;
    min-height: 50vh;
  }
  .about-foor2-text .title{
      font-size: 40px;
  }
  .about-floor2{
    width: calc(100% - 40px);
  }
  .about-floor3-item .title{
    font-size: 24px;
  }
  .about-floor3-item_desc{
     font-size: 16px;
  }
  .about-foor2-text .about-floor2-item_desc{
    font-size: 16px;
  }
  .about-foor2-text .title{
    margin-bottom: 16px;
  }
} 
</style>