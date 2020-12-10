import { Action } from "redux"
import { ThunkAction } from "redux-thunk"
import { fetchImage } from "../api"
import { AppActionTypes, IAppState } from "./types"

interface ISetImageAC extends Action<AppActionTypes> {
  type: AppActionTypes.SET_IMAGE,
  payload: string
}

const setImageAC = (image: string): ISetImageAC => ({ type: AppActionTypes.SET_IMAGE, payload: image })

interface ISetUserDataAC extends Action<AppActionTypes> {
  type: AppActionTypes.SET_USER_DATA,
  payload: {
    firstName: string,
    lastName: string
  }
}

export const setUserDataAC = (firstName: string, lastName: string): ISetUserDataAC => ({ type: AppActionTypes.SET_USER_DATA, payload: { firstName, lastName } })

export const getImage = (): ThunkAction<void, IAppState, unknown, Action<string>> => dispatch => {
  fetchImage().then(res => dispatch(setImageAC(res)))
}

export type appActions = ISetImageAC | ISetUserDataAC
