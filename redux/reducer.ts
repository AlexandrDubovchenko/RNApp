import { Action } from "redux"
import { appActions } from "./actionCreators"
import { IAppState, AppActionTypes } from "./types"

const initialState: IAppState = {
  image: null,
  firstName: null,
  lastName: null
}

export const appReducer = (state = initialState, action: appActions) => {
  switch (action.type) {
    case AppActionTypes.SET_IMAGE:
      return { ...state, image: action.payload }
    case AppActionTypes.SET_USER_DATA:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
