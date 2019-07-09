import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import theme from "./statics/themes/index";
import configureStore from "./store";
import AppRouter from "./routers";
import { GlobalStyle } from "./statics/themes/globalstyles";

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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <AppRouter />
        </React.Fragment>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
