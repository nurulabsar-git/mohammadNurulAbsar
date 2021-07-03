import React from 'react';

const SubProject = (props) => {
    const {image} = props.singleData;
    return (
        <div style={{alignItems: 'center'}}>
            <img src={image} alt=""  style={{width: '60%'}}/>
        </div>
    );
};

export default SubProject;