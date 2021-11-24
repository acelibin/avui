<template>
  <div id="app">
    <div class="btn" @click="handleClick">按钮</div>
  </div>
</template>

<script>
// import "babel-polyfill";
export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
    handleClick () {
      this.$alert({
        title: '111',
        text: '222',
        btnTitle: '333',
        closable: true
      }).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
