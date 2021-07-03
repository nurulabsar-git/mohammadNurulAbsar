import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Header = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-around', paddingTop: '40px'}}>
            <span><Link to="/" style={{textDecoration: 'none'}}><h4 style={{color: 'darkCyan'}}>Nurul Absar</h4></Link> </span>
            <span><button style={{borderRadius: '15px',  width: '120px', height: '40px', padding: '6px'}}><a style={{textDecoration: 'none', color: 'black'}} href="https://drive.google.com/uc?export=download&id=1BdlIu7AIgMXIjDqtLZjmChdPFjwios7g"><i class="fa fa-download" aria-hidden="true"></i> Resume</a></button></span>
            <span><Sidebar></Sidebar></span>  
        </div>
    );
};

export default Header;