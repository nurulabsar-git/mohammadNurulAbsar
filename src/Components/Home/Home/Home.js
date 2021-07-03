import React from 'react';
import Typical from 'react-typical';
import image1 from '../../../Image/formal.png'
import Contact from './Contact';
import Footer from './Footer';
import Projects from './Projects';
import Skills from './Skills';
import WorkingMethod from './WorkingMethod';
const Home = () => {
    return (
        <main>
         <section className="mt-5 p-4"> 
            <span className="text-center"><h3><span style={{color: '#203647'}}>Hello,</span> <span style={{color: '#DE354C'}}>I'm Mohammad Nurul Absar</span></h3></span>
            <span className="text-center">
            <Typical
                    steps={[
                        'Front End Developer', 2000, 'Hard Worker', 2000,
                        'Looking for — Internship/Full-Time Opportunities....|', 7000,
                    ]}
                    loop={Infinity}
                    wrapper="h4"
              />
            </span>
          </section>
          <div>
          <section style={{display: 'grid', justifyContent: 'center', alignItems: 'center', marginTop: '15px'}}>
              <img src={image1} alt="" />
          </section> <br />
          </div>
          
          <section className="p-4">
              <Skills></Skills>
          </section> <br />
          <section className="p-4">
              <Projects></Projects>
             <span className="d-flex justify-content-center align-item-center"> <a style={{textDecoration: 'none', borderBottom: '4px solid gray', color: 'gray'}} href="https://github.com/nurulabsar-git">Explore more</a></span>
          </section>
        <section>
               <WorkingMethod></WorkingMethod>
        </section>
        <section>
            <Contact></Contact>
        </section>
        <section>
            <Footer></Footer>
        </section>
        </main>
    );
};

export default Home;