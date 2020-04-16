import React from 'react';
import Login from './components/Ligin';
import { auth } from '../AuthenticatedComponent/actions';
import { connect } from "react-redux";

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;

        this.setState({
            [target.name]: target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.auth({
            login: this.state.login,
            password: this.state.password
        })
    }

    render() {
        return <Login 
            login={this.state.login} 
            password={this.state.password} 
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
        />
    }
}

const mapStateToProps = () => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        auth: payload => dispatch(auth(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);