import React from 'react';
import { connect } from 'react-redux';
import News from './components/News';

class NewsContainer extends React.Component {
    render() {
        const { posts } = this.props.news;
        return (
            <News posts={posts}/>
        )
    }
}

const mapStateToProps = store => {
    return {
        news: store.news,
    }
}

export default connect(
    mapStateToProps
) (NewsContainer);