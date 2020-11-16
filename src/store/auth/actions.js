import { get } from 'lodash'
import Axios from 'axios'

export default {
  async register(context, payload) {
    try {
      const registerResponse = await Axios.post('/user/register', payload)

      return Promise.resolve(get(registerResponse, 'data.message'))

    } catch (error) {
      // 400 responses are passed to Axios catch in error.response
      return Promise.reject(get(error.response, 'data.message'))
    }
  },
  async login(context, payload) {
    try {
      const loginResponse = await Axios.post('/user/login', payload)
      const { token, user } = loginResponse.data

      context.commit('authenticate', token, user)

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(get(error.response, 'data.message'))
    }
  },
  async logout(context) {
    try {
      context.commit('logout')

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(get(error.response, 'data.message'))
    }
  }
}
