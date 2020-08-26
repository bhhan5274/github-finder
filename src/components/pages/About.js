import React from 'react';

const About = () => {
    return (
        <div style={{display: 'flex', alignItem: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <h2 style={{
                fontSize: '2.5rem',
                textAlign: 'center'
            }}><i className="fab fa-react" style={{
                color: '#5ed4f4',
                fontSize: '2.5rem'
            }}></i> About This App</h2>
            <p style={{
                textAlign: 'center',
                fontSize: '1.5rem'
            }}>App to search Github users</p>
            <p style={{textAlign: 'center', fontSize: '1.3rem', marginTop: '.5rem'}}>Version: 1.0.0</p>
        </div>
    );
};

export default About;
