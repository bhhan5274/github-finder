import React, {Fragment} from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} alt="Loading..." style={{
                width: '80px',
                margin: 'auto',
                display: 'block',
                marginTop: '3rem'
            }} />
        </Fragment>
    );
};

export default Spinner;
