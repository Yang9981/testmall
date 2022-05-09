<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" :v-for="item in banners" ：key='item'>
                <img :src="item.image" alt="">
            </div>
        </div>
        <div class="swiper-button-back"></div>
        <div class="swiper-button-prve"></div>
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
    mounnted(){
        var mySwiper=new Swiper(".swiper-container",{
            loop:true,
            /* 自动播放 */
            autoplay:{
                delay:2000,
                disableOnInteraction:false
            },
            /* 小点 */
            pagination:{
                el:'.swiper-pagination',
                clickable:true
            },
            /* 左右按钮 */
            navigation:{
                nextEl:'.swiper-button-next',
                prveEl:'.swiper-button-prve'
            }
        })
    },     
}
</script>

<style>

</style>