import { defineStore, acceptHMRUpdate } from 'pinia'

export const useUIStore = defineStore('ui', {
  state: () => ({
    isSideMenuOpen: false,
  }),

  getters: {
    getSideMenuOpen: (state) => state.isSideMenuOpen,
  },

  mutations: {
    toggleMenu(state) {
      state.isSideMenuOpen = !state.isSideMenuOpen
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUIStore, import.meta.hot))
}
