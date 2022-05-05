<template>
    <tab-bar #default>
      
      <tab-bar-item path="/home" activeColor="blue">
        <template #item-icon><img src="../../assets/images/tabbar/home.svg" alt=""></template>
        <template #item-icon-action><img src="../../assets/images/tabbar/home_active.svg" alt=""></template>
        <template #item-text>首页</template>
      </tab-bar-item>

      <tab-bar-item path="/category"  activeColor="red">
        <template #item-icon><img src="~assets/images/tabbar/category.svg" alt=""></template>
        <template #item-icon-action><img src="~assets/images/tabbar/category_active.svg" alt=""></template>
        <template #item-text>分类</template>
      </tab-bar-item>
      <tab-bar-item path="cart" activeColor="red">
        <template #item-icon><img src="~assets/images/tabbar/shopcart.svg" alt=""></template>
        <template #item-icon-action><img src="~assets/images/tabbar/shopcart_active.svg" alt=""></template>
        <template #item-text>购物车</template>
      </tab-bar-item>
      <tab-bar-item path="/profile"  activeColor="red">
        <template #item-icon><img src="~assets/images/tabbar/profile.svg" alt=""></template>
        <template #item-icon-action><img src="~assets/images/tabbar/profile_active.svg" alt=""></template>
        <template #item-text>我的</template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
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
