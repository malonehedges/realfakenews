<template>
  <div class="page">

    <loading-screen v-if="!loaded"></loading-screen>

    <div v-if="loaded">
      <page-header></page-header>
      <md-layout>
        <md-layout
          v-for="(article, index) in data.articles"
          md-flex-medium="100"
          md-flex="50">
          <news-item
            v-bind:article="article"
            v-bind:index="index">
          </news-item>
        </md-layout>
      </md-layout>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

import LoadingScreen from 'components/LoadingScreen'
import PageHeader from 'components/PageHeader'
import NewsItem from 'components/NewsItem'

export default {
  computed: mapState([
    'data',
    'loaded'
  ]),
  components: {
    LoadingScreen,
    PageHeader,
    NewsItem,
  }
}
</script>

<style>
html, body {
    height: 100%;
}
body {
    margin: 0;
}
</style>
