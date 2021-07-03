import React from 'react';

const Skills = () => {
    return (
    <main className="mt-5"> 
        <h4 className="text-md-center"> <span style={{color: 'red'}}>MY TOOLS</span> & COMPETENCIES</h4>
        <div className="d-md-flex justify-content-center align-items-center">
          <div>
          <h4>Front-End Development</h4>
            <ul>
                <li>HTML/CSS, JavaScript for static sites</li>
                <li>React.js, Redux, Firebase for reactive sites</li>
                <li>Material UI, ReactBootstrap, Bootstrap as CSS Framework</li>
                <li>Constantly Learning New Technology</li>
            </ul>
          </div>
           <div>
           <h4>Back-End Development</h4>
           <ul>
               <li>Node.js, Express.js, MongoDB,</li>
               <li>JWT, Best security practices,</li>
               <li>Constantly Learning New Technology</li>
           </ul>
           </div>
        </div>
    </main>
    );
};

export default Skills;