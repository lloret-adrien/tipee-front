// store/pages.js
import axios from 'axios'

export const state = () => ({
  pages: [], // Pour stocker les pages récupérées de l'API
});

export const mutations = {
  // Mutation pour mettre à jour l'état avec les pages récupérées
  SET_PAGES(state, pages) {
    state.pages = pages;
  },
  ADD_PAGE(state, page) {
    state.pages.push(page);
  },
  REMOVE_PAGE(state, pageId) {
    state.pages = state.pages.filter(page => page.id !== pageId)
  },
};

export const actions = {
  // Action pour récupérer les pages depuis l'API et appeler la mutation pour mettre à jour l'état
  async fetchPages({ commit }) {
    return axios
      .get('http://localhost:8000/projects')
      .then((pages) => {
        commit('SET_PAGES', pages.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des pages:', error)
      })
  },
  async addPage({ commit }, page) {
    commit('ADD_PAGE', page);
  },
  async deletePage({ commit }, pageId) {
    return axios
      .delete(`http://localhost:8000/projects/${pageId}`) // Remplacez par l'URL de votre API
      .then(() => {
        commit('REMOVE_PAGE', pageId)
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression de la page:', error)
      })
  },
};

export const getters = {
  // Getter pour accéder aux pages dans l'état
  pages(state) {
    return state.pages;
  },
}
