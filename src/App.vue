<template>
  <body>
    <div id="app">
      <app-canvas></app-canvas>
    </div>
  </body>
</template>

<script>
import Canvas from "./components/Canvas"
export default {
  name: "App",
  components:{
    appCanvas:Canvas
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
</style>
