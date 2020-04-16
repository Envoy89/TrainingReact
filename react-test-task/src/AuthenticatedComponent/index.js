import React from 'react';
import { connect } from 'react-redux';
import { ROUTING } from '../middlewares/constants';

export default function requireAuthentication(Component) {
    class AuthenticationComponent extends React.Component {
        componentDidMount() {
            this.checkAuth(this.props.auth);
        }

        componentDidUpdate() {
            this.checkAuth(this.props.auth);
        }

        checkAuth(auth) {
            if (!auth.isAuthenticated) {
                this.props.dispatch({
                    type: ROUTING,
                    payload: {
                        method: 'replace',
                        nextUrl: '/login'
                    }
                })
            }
        }

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