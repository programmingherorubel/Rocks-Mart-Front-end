import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div style={{display:'flex',height:'80vh',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
            <ScaleLoader style={{fontSize:'100px'}} color="#F76045" />
        </div>
    );
};

export default Loading;