<template>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/首页.svg">
        <img slot="item-icon-action" src="~assets/img/tabbar/活跃首页.svg">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category"  activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/分类.svg">
        <img slot="item-icon-action" src="~assets/img/tabbar/分类满.svg">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="cart" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/购物车.svg">
        <img slot="item-icon-action" src="~assets/img/tabbar/购物车满.svg">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile"  activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/我的.svg">
        <img slot="item-icon-action" src="~assets/img/tabbar/我的选中.svg">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from './tabbar/TabBar.vue'
import TabBarItem from './tabbar/TabBarItem.vue'
export default {
  name:'MainTabBar',
    components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>
