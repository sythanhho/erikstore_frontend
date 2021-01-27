<template functional>
  <div>
    <div>
      <router-link to="/overall">Tong quan</router-link>
      <router-link to="/goods">Hang hoa</router-link>
    </div>
    <router-view name="bodyview" />
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "Body",
  functional: true,
  components: router
};
</script>
