<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" :v-for="item in banners">
                {{item}}
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
    mounnted(){
        var mySwiper=new Swiper(".swiper-container",{
            loop:true,
            autoplay:{
                delay:2000,
                disableOnInteraction:false
            },
            pagination:{
                el:'.swiper-pagination',
                clickable:true
            },
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