import React from 'react';

export default function Profile(props) {
    return (
        <div>
            <ul>
                <li>{props.userName}</li>
                <li>{props.userAge}</li>
                <li>{props.userInfo}</li>
            </ul>
        </div>
    )
}