<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive" >
      <!-- 图片-->
      <slot name="item-icon" class="iconfontStyle"></slot>
    </div>
    <div v-if="!isActive">
      <!-- 被点击图片-->
      <slot  name="item-icon-active" class="iconfontStyle"></slot>
    </div>
    <div :style='activeStyle' >
      <slot  name="item-text"></slot>
    </div>

   <!-- <span class="icon iconfont iconfontStyle">&#xe623;</span>
   <div>首页</div> -->
  </div>
</template>

<script>
  export default {
    name:'TabBarItem',
    props: {
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data() {
      return {
        // isActive:false
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    },
    computed:{
      isActive() {
        // /home -> item1(/home) =true
        // /home -> item1(/category) =false
        // /home -> item1(/cart) =false
        // /home -> item1(/profile) =false
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color:this.activeColor} : {}
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px;
  }
  .tab-bar-item .iconfontStyle {
    display: block;
    margin-top: 5 px;
  }
  
</style>
