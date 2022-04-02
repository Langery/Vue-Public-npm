<template>
  <div class="container">
    <div>{{msg}}</div>
    <div>{{propData}}</div>
    <div>
      <img :src="image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      image: require('../assets/logo.png')
    }
  },
  props: {
    propData: {
      type: String,
      default: '我是默认值'
    }
  }
}
</script>

<style>
.container{
  text-align: center;
}
</style>
