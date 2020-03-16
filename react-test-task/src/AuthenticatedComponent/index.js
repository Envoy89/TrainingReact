import React from 'react';
import { connect } from 'react-redux';

export default function requireAuthentication(Component) {
    class AuthenticationComponent extends React.Component {
        render() {
            return (
                <div>
                    {this.props.auth.isAuthenticated === true ? (
                        <Component {...this.props} />
                    ) : "You don't have permissions!"}
                </div>
            )
        }
    }

    const mapStateToProps = store => {
        return {
            auth: store.auth,
        }
    }

    return connect(mapStateToProps)(AuthenticationComponent);
}