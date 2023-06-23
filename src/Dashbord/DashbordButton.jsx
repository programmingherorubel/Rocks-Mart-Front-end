import React from 'react';

const DashbordButton = ({title}) => {
    return (
        <div className='text-center'>
            <button className='dashbordButton '>{title}</button>
        </div>
    );
};

export default DashbordButton;