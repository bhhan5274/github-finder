import React from 'react';
import {Link} from 'react-router-dom';

const UserItem = ({user: {avatar_url, login, html_url}}) => {
    return (
        <div className="userItem">
            <img src={avatar_url} alt="" className="userItem__img" style={{width: "80px"}} />
            <h3 className="userItem__name">{login}</h3>
            <Link className="btn btn-dark btn-sm my-1" to={`/user/${login}`}>More</Link>
        </div>
    );
};

export default UserItem;
