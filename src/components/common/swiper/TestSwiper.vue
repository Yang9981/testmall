<template>
<!-- （第1层/最外层）盒子，class一定要有一个swiper-container -->
<div class="test-swiper swiper-container">
 <!-- （第2层）盒子，class为swiper-wrapper;用于存放所有分页内容 -->
  <div class="swiper-wrapper">
   <!-- （第3层）盒子，class为swiper-slide;用于存放 单个 分页内容 -->
     <div class="swiper-slide" v-for="item in banners" :key="item">
                <div class="class swiper-zoom-container">
                    <img :src="item.image" alt="">
                </div>
      </div>
  </div>
  
  <!-- （属于第2层位置），class为swiper-button-next; 存放下一个页面的箭头 -->
  <div class="swiper-button-next">
    <!-- 存放字体文件的（本例中使用的是本地字体图标） -->
  </div>
  <!-- （属于第2层位置），class为swiper-button-prev; 存放上一个页面的箭头 -->
  <div class="swiper-button-prev">
  </div>
  <!-- （属于第2层位置），class为swiper-pagination; 存放分页（下方小圆点）按钮的 -->
  <div class="swiper-pagination"></div>
</div>

</template>

<script>
// 引入swiper
import Swiper from "swiper";
// 引入样式
import "swiper/dist/css/swiper.min.css";
// 引入本地字体图标

export default {
  name: "App",
  props:['banners'],
  methods: {
    
  },
  // 挂载完成后
  mounted() {
    setTimeout(()=>{
      var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式
      effect: "fade", // 渐现动画
      // zoom: true, // 控制缩放（需要配合html使用）

	  // 自动轮播
      autoplay: {
        delay: 1000, // 2秒切换一次
        disableOnInteraction: false, // 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
      },
      
	  // 控制分页按钮
      pagination: {
        el: ".swiper-pagination",
        // dynamicBullets: true, // 动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
        clickable: true, // 此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。

		// 带数字的分页器（需要配合CSS使用，在CSS中会提到）
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      observer:true,
      observeParents:true,
	  
	  // 左右（前后）切换箭头
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

	// 鼠标进入时
    mySwiper.el.onmouseover = function () {
      // 鼠标放上暂停轮播
      mySwiper.autoplay.stop();
      // 显示出前进后退按钮
      mySwiper.navigation.$nextEl.css("display", "block");
      mySwiper.navigation.$prevEl.css("display", "block");
    }
    // 鼠标移出后
    mySwiper.el.onmouseleave = function () {
      mySwiper.autoplay.start();
      mySwiper.navigation.$nextEl.css("display", "none");
      mySwiper.navigation.$prevEl.css("display", "none");
    }
  },100)
}
}
</script>


<style>
    .swiper-container {
        width: 100%;
        height: 300px;
        margin: 20px auto;
        
    }
        .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        width: 60%;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    .swiper-slide:nth-child(2n) {
        width: 40%;
    }
    .swiper-slide:nth-child(3n) {
        width: 20%;
    }
    .swiper-pagination-bullet {
      width: 20px;
      height: 20px;
      text-align: center;
    }
</style>