<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Demo />
    <m-card
      imgSrc="testone.jpeg"
      :imgHeight="280"
    >
      这里是概要部分
      <template v-slot:footer>
        <div>底部详细说明</div>
      </template>
    </m-card>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
