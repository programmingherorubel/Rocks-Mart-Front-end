import React from 'react';

const Error = ({error}) => {
    return (
        <div>
            <h5 className='text-center text-danger'>{error}</h5>
        </div>
    );
};

export default Error;