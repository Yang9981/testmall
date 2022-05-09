<template>
<div id='home'>
  <swiper :banners='banners'>

  </swiper>
  <!-- <swiper-item/> -->
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from 'network/home'
import Swiper from 'components/common/swiper/Swiper'
import SwiperItem from 'components/common/swiper/SwiperItem'

export default {
  name:"Home",
  components:{
    NavBar,
    Swiper,
    SwiperItem
  },
  data() {
    return {
      banners:[
        {image:'https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg'},
        {image:'https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg'},  
      ],
      recommends:[],
    }
  },
  created() {
    //在Home组件创建的时候请求数据，在.then里处理数据
/*     getHomeMultidata().then(res=>{
      this.banners=res.data.banner.list
      console.log(this.banners);
      this.recommends=res.data.recommend.list
    }) */
  },
}
</script>

<style>
.home-nav{
  background-color: var(--color-tint);
  color: white;
}
</style>
