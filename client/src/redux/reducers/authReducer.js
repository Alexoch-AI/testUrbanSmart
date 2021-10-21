import { AUTH_USER } from "../types/types"

const authReducer = (state = [], action) => {
  switch (action.type) {

    case AUTH_USER:
      return action.payload

    default:
      return state
  }
}

export default authReducer
