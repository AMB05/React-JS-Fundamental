import React from 'react';

function UserStatus(props) {
    return (
        <div>
            <h1>{props.isLoggedIn ? "Welcome back!" : "Please log in."}</h1>
        </div>
    );
}

export default UserStatus;
