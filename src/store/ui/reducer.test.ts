import { uiReducer, initialState } from "./reducers";

it("should update session", () => {
  expect(
    uiReducer(initialState, {
      type: "SET_LOADING"
    })
  ).toEqual({ loading: true });
});
