<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div> <!-- 放入两个图片插槽插入选中和不选中的图片，通过v-if判断状态 -->
    <div v-else><slot name="item-icon-action"></slot></div><!-- 之所以给插槽外层套div是因为外部会将插槽全部替换，导致插槽样式无法生效，所以样式挂载在外层div -->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  data () {
    return {

    }
  },

  props:{
    path:String,
    activeColor:{
      type:String, 
      defalut:'red'
    }
  },
  
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !==-1
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods: {
    itemClick(){
      this.$router.push(this.path).catch(()=>{});
    }
  }
}
</script>

<style>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 10px;
    vertical-align: middle;
  }
  .tab-bar-item img{
    width: 25px;
    height: 25px;
    margin-top: 3px;
    margin-bottom: 0;
  }
</style>
