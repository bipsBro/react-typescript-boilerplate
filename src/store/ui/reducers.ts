import { SET_LOADING, UiState } from "./types";

export const initialState: UiState = {
  loading: false
};

export function uiReducer(
  state = initialState,
  action: { type: string }
): UiState {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
