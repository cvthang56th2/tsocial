import { constants } from '../../../config/constants'

export default {
  authenticate(state, token, user) {
    state.token = token
    state.user = user

    localStorage.setItem(constants.LOCALSTORAGE_TOKEN_KEY, token)
  },
  logout(state) {
    state.token = null
    state.user = {}

    localStorage.removeItem(constants.LOCALSTORAGE_TOKEN_KEY)
  }
}
