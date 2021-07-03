import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import SubProject from './SubProject';
import image1 from '../../../Image/image1.png';
import image2 from '../../../Image/image2.png';
import image3 from '../../../Image/image3.png';
import image4 from '../../../Image/image4.png';
import image5 from '../../../Image/image5.png';
import image6 from '../../../Image/image6.png';
import image7 from '../../../Image/image7.png';


const projectData = [
 {
  image: image1,
  feature: '',
  techUsed: '',
 },

 {
    image: image2,
    feature: '',
    techUsed: '',
   },

   {
    image: image3,
    feature: '',
    techUsed: '',
   },

   {
    image: image4,
    feature: '',
    techUsed: '',
   },
 {
  image: image5,
  feature: '',
  techUsed: '',
 },
 {
    image: image6,
    feature: '',
    techUsed: '',
   },
   {
    image: image7,
    feature: '',
    techUsed: '',
   },


]


const Projects = () => {

    return (
     <div style={{margin: '30px'}}>
         <h5 style={{textAlign: 'center'}}>MY WORKS</h5>
        <Carousel>
            {
                projectData?.map(singleData => <SubProject singleData={singleData}></SubProject>)
            }
        </Carousel>
       </div>
        
    );
};

export default Projects;