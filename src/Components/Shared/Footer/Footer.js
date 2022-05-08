import React from 'react';
import google from '../../../Images/social/google.png';
import facebook from '../../../Images/social/facebook.png';
import github from '../../../Images/social/github.png';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer'>
            <div className='text-center'>
                <h5>Copyright © {year}</h5>
                <h5>All Rights Reserved</h5>
            </div>
            <div>
               <b>Address :</b> West Rampura, Dhaka. <br />
                <b>Contact:</b> 01258978515
            </div>
            <div>
                <img style={{ width: '30px' }} src={google} alt="" />
                <img style={{ width: '30px' }} src={facebook} alt="" />
                <img style={{ width: '30px' }} src={github} alt="" />
            </div>
            
        </footer>
    );
};

export default Footer;