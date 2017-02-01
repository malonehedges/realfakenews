import Vue from 'vue'
import Vuex from 'vuex'
import { getArticles } from '../api/api'

Vue.use(Vuex)

const state = {
  data: null,
  loaded: false,
}

const mutations = {
  SET_DATA (state, articles) {
    state.data = articles
  },

  SET_LOADED (state, loaded) {
    state.loaded = loaded
  }
}

const actions = {
  async loadArticles ({ commit }) {
    let articles = await getArticles()
    commit('SET_DATA', articles)
    commit('SET_LOADED', true)
  },

  async nextPage ({ commit, state }) {
    let page = state.data.after
    let articles = await getArticles(page)
    commit('SET_DATA', articles)
    commit('SET_LOADED', true)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
