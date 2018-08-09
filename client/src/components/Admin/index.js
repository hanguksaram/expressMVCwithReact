import React from 'react';

const User = (props) => {
    console.log(props)
    return (
        <div className="user_container">
            <div className="avatar">
                <img alt="avatar" src="/images/avatar.png"/>
            </div>
            <div className="nfo">
                <div>Name:{props.user.login.email}</div>
                <div>Last Name</div>
                <div>Kek </div>
            </div>
        </div>
    );
};

export default User;