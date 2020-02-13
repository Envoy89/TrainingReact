import React from "react";
import { connect } from "react-redux";
import { ROUTING } from "../../constants/Routing";

export default function requireAuthentication(Component) {
  class AuthenticatedComponent extends React.Component {
    componentDidMount() {
      this.checkAuth(this.props.user);
    }

    componentDidUpdate() {
      this.checkAuth(this.props.user);
    }

    checkAuth(user) {
      if (!user.isAuthenticated) {
        this.props.dispatch({
          type: ROUTING,
          payload: {
            method: "replace",
            nextUrl: "/login"
          }
        });
      }
    }

    render() {
      return (
        <div>
          {this.props.user.isAuthenticated === true ? (
            <Component {...this.props} />
          ) : null}
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      user: state.user
    };
  }

  return connect(mapStateToProps)(AuthenticatedComponent);
}
