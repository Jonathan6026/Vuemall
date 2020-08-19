<template>
    <div id="home">
      <nav-bar class="home-nav-bar">
            <div slot="center">购物街</div>
          </nav-bar>
    </div>
</template>

<script>
  import navBar from '../../components/common/navbar/navBar.vue'
  export default {
    name:'Home',
    data () {
      return {

      }
    },
    components: {
      navBar
    }
  }
</script>

<style scoped>
  .home-nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
