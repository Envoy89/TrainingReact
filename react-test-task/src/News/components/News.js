import React from 'react';
import Post from './Post';

export default function News(props) {
    return (
        <div>
            {props.posts.map((entry) => {
                return <Post key={entry.id} title={entry.title} text={entry.text} />
            })}
        </div>
    )
}