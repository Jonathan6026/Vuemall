<template>
  <tab-bar>
    <!-- 主页-->
    <tab-bar-item path="/home" activeColor='red'><!-- 被点击颜色 -->
      <!-- 图片 -->
     <span  slot="item-icon" class="icon iconfont iconfontStyle">&#xe623;</span>
     <!-- 被点击图片-->
     <span  slot="item-icon-active" class="icon iconfont iconfontStyle">&#xe623;</span>
     <div  slot="item-text">首页</div>
    </tab-bar-item >
      <!-- 分类-->
    <tab-bar-item path="/category" activeColor='red'>
      <span slot="item-icon" class="icon iconfont iconfontStyle">&#xe7f9;</span>
      <span  slot="item-icon-active" class="icon iconfont iconfontStyle">&#xe7f9;</span>
      <div slot="item-text">分类</div>
    </tab-bar-item >
      <!-- 购物车-->
    <tab-bar-item path="/cart" activeColor='red'>
      <span slot="item-icon" class="icon iconfont iconfontStyle">&#xe600;</span>
      <span  slot="item-icon-active" class="icon iconfont iconfontStyle">&#xe600;</span>
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <!-- 我的 -->
    <tab-bar-item path="/profile" activeColor='red'>
      <span slot="item-icon" class="icon iconfont iconfontStyle">&#xe615;</span>
      <span  slot="item-icon-active" class="icon iconfont iconfontStyle">&#xe615;</span>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>

</template>

<script>
  import TabBar from '../../common/tabbar/TabBar.vue'
  import TabBarItem from '../../common/tabbar/TabBarItem.vue'
  export default {
    name:"MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
</style>
