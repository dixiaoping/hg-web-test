// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  devtools: { enabled: true },
  _generate: true,
  app:{
    head:{
      "meta": [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        },
        {
          "charset": "utf-8"
        }
      ],
      "link": [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/swiper@8/swiper-bundle.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap'
        }
      ],
      alias: {
        "@": "./"
      },
      "script": [
        {
          src: 'https://unpkg.com/swiper@8/swiper-bundle.js',
          body: false, // 将脚本放置在</body>之前，默认为false放置在<head>中
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
          body: false, // 将脚本放置在</body>之前，默认为false放置在<head>中
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js',
          body: false, // 将脚本放置在</body>之前，默认为false放置在<head>中
        }
      ],
      "noscript": [],
      buildModules: [
        '@nuxtjs/composition-api',
      ],
    }
  },
  generate: {
    routes: [
      '/article/how-are-you',
      '/article/how-are-you-age',
      // 其他需要预渲染的路由
    ]
  },
  experimental: {
    externalVue: false,
  },
}
