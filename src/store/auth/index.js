import { constants } from '../../../config/constants'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
  namespaced: true,
  state: {
    token: localStorage.getItem(constants.LOCALSTORAGE_TOKEN_KEY) || null,
    user: {}
  },
  mutations,
  actions,
  getters
}
