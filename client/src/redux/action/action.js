import { AUTH_USER, USER } from "../types/types"

export const getUserThunk = () => async (dispatch, getState) => {
  // const response = await fetch("url")
  // const serverResponse = await response.json()
  const fakeUser =
  {
    login: 'developer21',
    password: '123456'
  }
  dispatch(getUser(fakeUser))
}

export const getUser = (user) => {
  return {
    type: USER,
    payload: user,
  }
}

export const authUser = (bool) => {
  return {
    type: AUTH_USER,
    payload: bool
  }
}
