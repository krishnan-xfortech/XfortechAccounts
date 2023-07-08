<template>
  <main class="">
    <router-view />
  </main>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('contextmenu', this.rightClick)
  },
  beforeUnmount() {
    window.removeEventListener('contextmenu', this.rightClick)
  },
  methods: {
    // Prevents the default context menu from appearing
    rightClick(event) {
      event.preventDefault();
    }
  }
};
</script>