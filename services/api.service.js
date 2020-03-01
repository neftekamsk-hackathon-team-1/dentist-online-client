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
}

export default new ApiClient()
