import { systemReducer, initialState } from "./reducers";

it("should update session", () => {
  expect(
    systemReducer(initialState, {
      type: "UPDATE_SESSION",
      payload: { loggedIn: false, session: "", userName: "" }
    })
  ).toEqual({ loggedIn: false, session: "", userName: "" });
});
