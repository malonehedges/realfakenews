<template>
  <div class="flex-container">
    <div class="row">
      <div class="flex-item">
        <span class="md-display-2">Real Fake News™</span>
      </div>
      <div class="flex-item">
        <span class="md-subheading">R.I.P.</span>
      </div>
      <div class="flex-item">
        <md-spinner :md-size="55" md-indeterminate></md-spinner>
      </div>
    </div>
  </div>
</template>

<style>
.flex-container {
    height: 100vh;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.row {
    width: auto;
}
.flex-item {
    padding: 5px;
    margin: 10px;
    line-height: 20px;
    text-align: center;
}
</style>
