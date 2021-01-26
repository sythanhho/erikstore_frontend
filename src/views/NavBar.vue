<template functional>
    <a-row class="nav-bar">
        <a-col :span="12" class="menu">Menu</a-col>
    </a-row>
</template>

<script>
export default {
    functional: true,
    name: 'NavBar'
}
</script>

<style scoped>
    .nav-bar {
        background-color: blue;
    }
</style>