import React from 'react';
import Home from './components/Home';
import { connect } from 'react-redux';

class HomeContainer extends React.Component {
    render() {
        const { userName } = this.props.home;
        return <Home userName={userName}/>
    }
}

const mapStateToProps = store => {
    return {
        home: store.home,
    }
}

export default connect(
    mapStateToProps,
) (HomeContainer);