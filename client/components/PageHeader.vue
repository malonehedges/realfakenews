<template>
  <md-toolbar>
    <h2 class="md-title" style="flex: 1">Real Fake News™</h2>
    <md-button @click="onClick">Moar</md-button>
  </md-toolbar>
</template>

<script>
export default {
  methods: {
    onClick () {
      this.$store.dispatch('nextPage')
    }
  }
}
</script>
