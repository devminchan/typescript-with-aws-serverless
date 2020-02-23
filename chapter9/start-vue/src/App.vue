<template>
  <div>
    <span>{{ message }}</span><br/>
    <span v-html="message"></span>
  </div>
</template>

<script>
export default {
  name: 'HellWorld',
  data: () => {
    return {
      message: '안녕하세요. <span style="color:red">Vue</span>입니다.',
    };
  }
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
