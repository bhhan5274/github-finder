import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import Repos from "../repos/Repos";

const User = ({user, repos}) => {
    const {name, avatar_url, location, company, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable} = user;

    return (
        <Fragment>
            <Link to="/" className="btn btn-light" style={{color: '#777'}}>
                Back To Search
            </Link>
            <span className="user__hireable">Hireable </span>{'  '}
            {hireable ? <i className="fas fa-check text-success"/> : <i className="fas fa-times-circle text-danger" /> }
            <div className="user__card">
                <div className="user__card-left">
                    <img src={avatar_url} alt="" style={{borderRadius: '50%', width: '150px'}} />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div className="user__card-right">
                    {bio && <Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                    </Fragment>}
                    <a href={html_url} className="btn btn-dark" style={{margin: '1rem 0'}}>Visit Github Profile</a>
                    <ul>
                        <li>
                            {login && <Fragment>
                                <strong>Username: </strong> {login}
                            </Fragment>}
                        </li>
                        <li>
                            {company && <Fragment>
                                <strong>Company: </strong> {company}
                            </Fragment>}
                        </li>
                        <li>
                            {blog && <Fragment>
                                <strong>Website: </strong> {blog}
                            </Fragment>}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="user__repos">
                <div className="badge badge-primary"><span>Followers</span><span> {followers}</span></div>
                <div className="badge badge-success"><span>Following</span><span> {following}</span></div>
                <div className="badge badge-light"><span>Public Repos</span><span> {public_repos}</span></div>
                <div className="badge badge-dark"><span>Public Gists</span><span> {public_gists}</span></div>
            </div>
            <Repos repos={repos} />
        </Fragment>
    );
};

export default User;
