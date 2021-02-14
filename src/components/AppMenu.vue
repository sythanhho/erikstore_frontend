<template>
  <!-- <div class="layout-menu-container"> -->
  <v-list v-if="model" nav>
    <app-submenu
      :items="model"
      class="layout-menu"
      :root="true"
      @menuitem-click="onMenuItemClick"
    />
  </v-list>
  <!-- </div> -->
</template>

<script>
import AppSubmenu from "@/components/AppSubmenu.vue";

export default {
  props: {
    model: Array
  },
  methods: {
    onMenuItemClick(event) {
      this.$emit("menuitem-click", event);
    }
  },
  components: {
    AppSubmenu
  }
};
</script>

<style scoped></style>
