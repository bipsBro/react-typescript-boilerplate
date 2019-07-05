import React from "react";
import { connect } from "react-redux";
import { AppState } from "./store";
import { SystemState } from "./store/system/types";
import { updateSession } from "./store/system/actions";
import { UiState } from "./store/ui/types";
import { setLoading } from "./store/ui/actions";

interface AppProps {
  setLoading: typeof setLoading;
  updateSession: typeof updateSession;
  ui: UiState;
  system: SystemState;
}
const mapStateToProps = (state: AppState) => ({
  system: state.system,
  ui: state.ui
});

const App: React.FC<AppProps> = () => {
  return <div>React - typescript - boilerplate</div>;
};

export default connect(
  mapStateToProps,
  { setLoading, updateSession }
)(App);
