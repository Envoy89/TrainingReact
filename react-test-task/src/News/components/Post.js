import React from 'react';

export default function Post(props) {
    const { title, text } = props;
    return (
        <div>
            <div>{title}</div>
            <div>{text}</div>
        </div>
    )
}