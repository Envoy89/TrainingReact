import React from 'react';
import { connect } from 'react-redux';
import Profile from './components/Profile';
import authenticatedComponent from '../AuthenticatedComponent';

class ProfileContainer extends React.Component {
    render() {
        const { userName, userAge, userInfo } = this.props.profile;
        return (
            <Profile userName={userName} userAge={userAge} userInfo={userInfo} />
        )
    }
}

const mapStateToProps = (store) => {
    return {
        profile: store.profile
    }
}

const ConnectProfileContainer = connect(
    mapStateToProps,
) (ProfileContainer);

export default authenticatedComponent(ConnectProfileContainer);