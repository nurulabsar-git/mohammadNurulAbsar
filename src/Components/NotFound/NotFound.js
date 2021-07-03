import React from 'react';

const NotFound = () => {
    return (
        <div>
          <div style={{textAlign: 'center', margin: '10px'}}>
         <h1>😢</h1>
         <h2>404 <span style={{color: 'gray'}}>That's an error!</span></h2>
         <p>The requested URL/badpage was not found on this server <span style={{color: 'gray'}}>That's all we know</span></p>
         <p><i>Please try again</i></p>
        </div>  
        </div>
    );
};

export default NotFound;