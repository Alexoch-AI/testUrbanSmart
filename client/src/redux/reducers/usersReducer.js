import { USER } from "../types/types"

const usersReducer = (state = [], action) => {
  switch (action.type) {

    case USER:
      return action.payload

    default:
      return state
  }
}

export default usersReducer
