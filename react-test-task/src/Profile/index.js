import React from 'react';
import { connect } from 'react-redux';
import Profile from './components/Profile';

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

export default connect(
    mapStateToProps,
) (ProfileContainer);