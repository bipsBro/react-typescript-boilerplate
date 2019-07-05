import { SET_LOADING, UiActionType, UiState } from "./types";

const initialState: UiState = {
  loading: false
};

export function uiReducer(state = initialState, action: UiActionType): UiState {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
