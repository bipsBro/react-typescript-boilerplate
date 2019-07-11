import React from "react";
import { connect } from "react-redux";
import { SystemState } from "store/system/types";
import { updateSession } from "store/system/actions";
import { UiState } from "store/ui/types";
import { setLoading } from "store/ui/actions";
import { AppState } from "store";

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

const SignIn: React.FC<AppProps> = () => <span>Sign In</span>;

export default connect(
  mapStateToProps,
  { setLoading, updateSession }
)(SignIn);
