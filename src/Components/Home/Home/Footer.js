import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
    return (
        <div className="m-5 p-5">
          <h4 className="text-center">Mohammad Nurul Absar</h4>  
          <div className="d-flex justify-content-center px-5">
          <span className="mx-2"><a style={{textDecoration: 'none'}} href="http://www.linkedin.com/in/mohammadnurulabsar/"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></span>
          <span className="mx-2"><a style={{textDecoration: 'none'}} href="https://github.com/nurulabsar-git"><i class="fa fa-github" aria-hidden="true"></i></a></span>
          <span className="mx-2"><a style={{textDecoration: 'none'}} href="https://facebook.com/"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></span>
          </div>
          <div>
           <p className="text-center mt-5"><small>© Copyright — {year} — by Mohammad Nurul Absar</small></p>
          </div>
        </div>
    );
};

export default Footer;