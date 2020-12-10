
export enum AppActionTypes {
  SET_IMAGE = "SET_IMAGE",
  SET_USER_DATA = "SET_USER_DATA"
}

export interface IAppState {
  image: null | string,
  firstName: null | string,
  lastName: null | string,
}
