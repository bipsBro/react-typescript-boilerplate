export const SET_LOADING = "SET_LOADING";

interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

export interface UiState {
  loading: boolean;
}

export type UiActionType = SetLoadingAction;
