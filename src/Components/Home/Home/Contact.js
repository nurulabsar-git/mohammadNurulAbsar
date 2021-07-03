import React from 'react';
import emailjs from 'emailjs-com';
// import './Contact.css'
const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_ldyvmim', 'template_mi4ow2a', e.target, 'user_XBO7sgJ6u2CFRWTghzmm5')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
        }

    return (
        <div className="container mt-5">
          <form onSubmit={sendEmail}>
             <div className="row pt-1 mx-auto">
              <div className="col-8 form-group  mx-auto"> <h4>Please Contact With Me</h4></div>
              <div className="col-8 form-group  mx-auto">
                <input type="text" className="form-control" placeholder="Name*" name="name" />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input type="email" className="form-control" placeholder="Email*" name="email"  />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input type="text" className="form-control" placeholder="Subject" name="subject" />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea className="form-control" placeholder="Your message*" name="message" id="" cols="30" rows="8"></textarea>
              </div>
               <div className="col-8 pt-1 pb-4 mx-auto">
                 <input type="submit" className="btn btn-info" value="Send Message"/>
               </div>

             </div>
          </form>
        </div>
    );
};

export default Contact;