import React from 'react'
import "./Footer.css"
import {assets} from "../../assets/assets"

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='logo' src={assets.logo}></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut reprehenderit, blanditiis unde illum facere in consequuntur repellat debitis sint esse ad praesentium nisi assumenda sunt asperiores beatae dignissimos! Voluptatibus!</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-1234567890</li>
                <li>contact@hungerhub.com</li>
            </ul>
        </div>
      </div>
      <hr></hr>
      <p className='footer-copyright'>Copyright © 2025 Hungerhub.com - All rights reserved</p>
    </div>
  )
}

export default Footer
