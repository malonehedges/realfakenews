<template>
  <div class="newsitem-container">
    <md-whiteframe md-elevation="2" class="newsitem-whiteframe">
      <div class="newsitem-image-container">
        <img v-bind:src="article.thumbnail" />
      </div>
      <div class="newsitem-text-container">
        <a v-bind:href="article.url">
          <span class="md-title newsitem-link">{{ article.title }}</span>
        </a>
        <!-- <div class="md-subhead"></div> -->
      </div>
    </md-whiteframe>
  </div>
</template>

<script>
export default {
  props: [
    'article',
    'index'
  ]
}
</script>

<style>
.newsitem-container {
  width: 100%;
  margin: 8px 16px;
}

.newsitem-whiteframe {
  padding: 16px;
  overflow: hidden;
}

.newsitem-image-container {
  width: 140px;
  float: left;
  overflow: hidden;
}

.newsitem-text-container {
  padding-left: 10px;
  overflow: hidden;
}

.newsitem-link {
  color: #4477c9;
}
</style>
