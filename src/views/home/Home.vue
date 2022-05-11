<template>
<div id='home'>
  <nav-bar class="home-nav"><template #center>购物街</template></nav-bar>
  <swiper :banners='banners'/>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Swiper from 'components/common/swiper/Swiper'

import {getHomeMultidata} from 'network/home'

export default {
  name:"Home",
  components:{
    NavBar,
    Swiper,
  },
  data() {
    return {
      banners:[],
      recommends:[],
    }
  },
  created() {
    //在Home组件创建的时候请求数据，在.then里处理数据
    getHomeMultidata().then(res=>{
      this.banners=res.data.banner.list
      console.log(this.banners);
      this.recommends=res.data.recommend.list
    })
  },
}
</script>

<style>
.home-nav{
  background-color: var(--color-tint);
  color: white;
}
</style>
