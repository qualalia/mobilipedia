import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
//import PropTypes from "prop-types";
import { Home } from "../components";
//import { me } from "./store";

class Routes extends Component {
  /*  componentDidMount() {
    this.props.loadInitialData();
  }*/

  render() {
//    const { isLoggedIn, history } = this.props;
    return (
      <Switch>
        <Route
          path="/"
          render={routeProps => (
	    <Home />
          )}
        />
      </Switch>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked when the url changes
export default withRouter(Routes);

/**
 * PROP TYPES
 */
/*Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  history: PropTypes.object,
};*/
