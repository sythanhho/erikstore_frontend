<template functional>
    <a-row class="app-bar">
      <a-col :span="3" class="leading">Leading</a-col>
      <a-col :span="3" class="title">Title</a-col>
      <a-col :span="12" :offset="6" class="actions">Actions</a-col>
    </a-row>
    
</template>
<script>

export default {
  functional: true,
  name: "AppBar"
//   components: Row, Col
};
</script>

<style scoped>
  .app-bar {
    background-color:rgb(0, 183, 255);
  }
</style>