import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routers";
const store = configureStore();

// import { SystemState } from "./store/system/types";
// import { updateSession } from "./store/system/actions";
// import { UiState } from "./store/ui/types";
// import { setLoading } from "./store/ui/actions";

// interface AppProps {
//   setLoading: typeof setLoading;
//   updateSession: typeof updateSession;
//   ui: UiState;
//   system: SystemState;
// }
// const mapStateToProps = (state: AppState) => ({
//   system: state.system,
//   ui: state.ui
// });
//
// const App: React.FC<AppProps> = () => {
//   return <div>React - typescript - boilerplate</div>;
// };
//
// export default connect(
//   mapStateToProps,
//   { setLoading, updateSession }
// )(App);

export const Root = () => (
  <Provider store={store}>
    <Router>
      <AppRouter />
    </Router>
  </Provider>
);
