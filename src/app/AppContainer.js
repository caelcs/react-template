import { connect } from "react-redux";
import { fetchConfig } from "./config/actions";
import App from "./App";

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchConfiguration: () => fetchConfig()(dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(App);
