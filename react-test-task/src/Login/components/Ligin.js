import React from 'react';

export default function Login(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type="text" name="login" onChange={props.handleInputChange} value={props.login} placeholder="user name"></input>
                <input type="text" name="password" onChange={props.handleInputChange} value={props.password} placeholder="user password"></input>
                <input type="submit" value="login"></input>
            </form>
        </div>
    )
}