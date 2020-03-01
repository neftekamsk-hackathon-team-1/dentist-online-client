import ApiClient from '@/services/api.service'

export const state = () => ({
  allSpecialists: []
})

export const actions = {
  async loadAllSpecialists({ commit }) {
    const specialists = await ApiClient.getAllSpecialists()
    commit('setAllSpecialists', specialists)
  }
}

export const mutations = {
  setAllSpecialists(state, allSpecialists) {
    state.allSpecialists = allSpecialists
  }
}
