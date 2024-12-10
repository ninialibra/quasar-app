import { defineStore, acceptHMRUpdate } from 'pinia'

export const useUIStore = defineStore('ui', {
  state: () => ({
    isSideMenuOpen: false,
  }),

  getters: {
    getSideMenuOpen: (state) => state.isSideMenuOpen,
  },

  actions: {
    increment() {
      this.counter++
    },
  },

  mutations: {
    toggleSideMenu(state) {
      this.isSideMenuOpen = !state.isSideMenuOpen
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUIStore, import.meta.hot))
}
