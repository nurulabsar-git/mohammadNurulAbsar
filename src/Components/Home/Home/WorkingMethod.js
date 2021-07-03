import React from 'react';
import './WorkinFllow.css';
const preWorkingData = [
    {   id: 1,
        heading: "Get instructions",
        process: "Without the proper information on a project, what is the purpose? how does it work? working on a project is a bit harder. that's why I always start with proper instructions."
    },
    {
     id: 2,
     heading: "Plan the project",
     process: "After getting all the necessary information from the client. I work on planning the project, All of the components, structures, tools & workflow."
    },
    {   id: 3,
        heading: "Complete the project",
        process: "Good planning and file structure always help with professional and powerful projects. And that's how I like to complete my projects."
    },
    {   id: 4,
        heading: "Review & Deliver",
        process: "After completing the project successfully, It is time for some refactoring and then finally delivered to the client with all-time support."
    },

]
const WorkingMethod = () => {
    return (
      <div style={{backgroundColor: '#DCE1E3', borderRadius: '2px', padding: '30px'}}>
         <div style={{textAlign: 'center'}}>
                <h6>MY WORKFLOW</h6>
                <h4>Want to know how I work ?</h4>
            </div>
       <div className="working-method my-5">
            {
                preWorkingData?.map(datum => 
                    <div className="px-md-5">
                         <h3 className="text-justify px-md-3" style={{textShadow: '1px 2px gray'}}>0{datum?.id}.</h3>
                         <h4 className="text-justify px-md-3">{datum.heading}</h4>
                         <p className="text-justify px-md-3">{datum.process}</p>
                    </div>
                )
            }
        </div>
      </div>
    );
};

export default WorkingMethod;