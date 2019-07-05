import { SET_LOADING, UiActionType } from "./types";

export function setLoading(isLoading: boolean): UiActionType {
  return {
    type: SET_LOADING,
    payload: isLoading
  };
}
