import React from 'react';
import error from './error.svg';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{margin: 'auto', maxWidth: '1100px', textAlign: 'center'}}>
            <img src={error} style={{
                width: '200px',
                borderRadius: '2px'
            }} alt=""/>
            <h1 style={{fontSize: '3rem'}}>Not Found</h1>
            <p style={{fontSize: '1.5rem', marginBottom: '1.5rem'}}>The page you are looking for does not exist...</p>
            <Link className="btn btn-dark btn-sm" to={`/github-finder`}>&larr; Back to Home</Link>
        </div>
    );
};

export default NotFound;
