<template>
<!-- （第1层/最外层）盒子，class一定要有一个swiper-container -->
    <div class="swiper-container">
         <!-- （第2层）盒子，class为swiper-wrapper;用于存放所有分页内容 -->
        <div class="swiper-wrapper">
            <!-- （第3层）盒子，class为swiper-slide;用于存放 单个 分页内容 -->
            <div class="swiper-slide" v-for="item in banners" :key="item">
                <a :href="item.link">
                <div class="swiper-zoom-container">
                        <img :src="item.image" alt="">
                </div>
                </a>
            </div>
        </div>

        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from "swiper";
// 引入样式
import "swiper/dist/css/swiper.min.css";

export default {
    name:'swiper',
    props:['banners'],
    /* 轮播图的使用 */
    mounted(){
        setTimeout(()=>{
        var mySwiper=new Swiper(".swiper-container",{
            loop : true,
            effect: "fade",
            /* 自动播放 */
            autoplay:{
                delay:2000,
                disableOnInteraction:false
            },
            /* 小点 */
            pagination:{
                el:'.swiper-pagination',
                clickable:true,
                paginationType : 'bullets'
            },
            /* 左右按钮 */
            navigation:{
                nextEl:'.swiper-button-next',
                prevEl:'.swiper-button-prev'
            },
            observer:true,
            observeParents:true,

        })
        mySwiper.el.onmouseover = function () {
            // 鼠标放上暂停轮播
            mySwiper.autoplay.stop();
            // 显示出前进后退按钮
            mySwiper.navigation.$nextEl.css("display", "block");
            mySwiper.navigation.$prevEl.css("display", "block");
        },
        // 鼠标移出后
        mySwiper.el.onmouseleave = function () {
            mySwiper.autoplay.start();
            mySwiper.navigation.$nextEl.css("display", "none");
            mySwiper.navigation.$prevEl.css("display", "none");
        }
        },100)
    },     
}
</script>

<style>

</style>