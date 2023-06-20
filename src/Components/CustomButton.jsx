import React from 'react';

const CustomButton = ({title}) => {
    return (
        <div className='text-center'>
            <button className='dashbordButton'>{title}</button>
        </div>
    );
};

export default CustomButton;