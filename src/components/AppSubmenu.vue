<template>
  <div>
    <template v-for="(item, i) of items">
      <v-list-item v-if="item.to" :key="i" :to="item.to" class="mb-0">
        <v-list-item-title>
          {{ item.label }}
        </v-list-item-title>
      </v-list-item>
      <v-list-group v-if="!item.to" :key="i" no-action class="nav-menu">
        <template v-slot:activator>
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </template>

        <v-list-item
          v-for="(item, i) of item.items"
          :key="i"
          :to="item.to"
          class="mb-0"
        >
          <v-list-item-title>
            {{ item.label }}
          </v-list-item-title>
        </v-list-item>
      </v-list-group>
    </template>
  </div>
</template>
<script>
export default {
  name: "appsubmenu",
  props: {
    items: Array,
    root: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeIndex: null
    };
  },
  methods: {
    onMenuItemClick(event, item, index) {
      if (item.disabled) {
        event.preventDefault();
        return;
      }

      if (!item.to && !item.url) {
        event.preventDefault();
      }

      //execute command
      if (item.command) {
        item.command({ originalEvent: event, item: item });
      }

      this.activeIndex = index === this.activeIndex ? null : index;

      this.$emit("menuitem-click", {
        originalEvent: event,
        item: item
      });
    },
    visible(item) {
      return typeof item.visible === "function"
        ? item.visible()
        : item.visible !== false;
    }
  }
};
</script>

<style scoped>
.v-list-group > .v-list-group__items {
  background-color: aqua !important;
}
</style>
