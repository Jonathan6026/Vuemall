<template>
  <div id="tab-bar">
    <!-- <div class="tab-bar-item">
      <span class="icon iconfont">&#xe623;</span>
      首页
    </div>
    <div  class="tab-bar-item">
      <span class="icon iconfont">&#xe7f9;</span>
      分类
    </div>
    <div  class="tab-bar-item">
      <span class="icon iconfont">&#xe600;</span>
      购物车
    </div>
    <div  class="tab-bar-item">
      <span class="icon iconfont">&#xe615;</span>
      我的
    </div> -->
    <slot>

    </slot>
  </div>
</template>

<script>
  export default {
    name:'TabBar'
  }
</script>

<style scoped="scoped">

  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -1px 1px rgba(100,100,100,0.2);
  }
  
</style>
