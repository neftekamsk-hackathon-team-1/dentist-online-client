import axios from 'axios'

class ApiClient {
  constructor() {
    this.client = axios.create({
      baseURL: process.env.API_URL
    })
  }

  getAllSpecialists() {
    return this.client.get('/specialists').then((res) => res.data)
  }

  getSpecialistsByServiceId(serviceId) {
    return this.client
      .get('/specialists', {
        params: {
          service_id: serviceId
        }
      })
      .then((res) => res.data)
  }

  /**
   *
   * @param {object} data
   * @param {number} data.specialistId
   * @param {Date} data.date
   * @param {string} data.phone
   * @param {number} data.serviceId
   */
  createAppointment(data) {
    return this.client
      .post(`/specialists/${data.specialistId}/appointments`, {
        date: data.date,
        phone: data.phone,
        specialist_id: data.specialistId,
        service_id: data.serviceId
      })
      .then((res) => res.data)
  }
}

export default new ApiClient()
