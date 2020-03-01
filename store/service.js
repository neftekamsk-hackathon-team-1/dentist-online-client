import ApiClient from '@/services/api.service'

export const state = () => ({
  specialists: []
})

export const actions = {
  async loadSpecialistsByServiceId({ commit }, serviceId) {
    const specialists = await ApiClient.getSpecialistsByServiceId(serviceId)
    commit('setSpecialists', specialists)
  }
}

export const mutations = {
  setSpecialists(state, specialists) {
    state.specialists = specialists
  }
}
