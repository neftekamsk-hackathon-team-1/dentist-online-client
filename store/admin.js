import ApiClient from '@/services/api.service'

export const state = () => ({
  appointments: []
})

export const actions = {
  async loadAllAppointments({ commit }) {
    const appointments = await ApiClient.getAllAppointments()
    commit('setAllAppointments', appointments)
  }
}

export const mutations = {
  setAllAppointments(state, appointments) {
    state.appointments = appointments
  }
}
