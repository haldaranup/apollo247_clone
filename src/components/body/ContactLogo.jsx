import React from 'react'
import "./contactLogo.scss"
import { Link } from "react-router-dom";
import Home from '../../Pages/HomePage';
const ContactLogo = () => {
  return (
    <Link className="contactLogo" to={"/"}>

          <img
            src="https://newassets.apollo247.com/images/ic-mascot.png"
            alt=""
          />
        </Link>
  )
}

export default ContactLogo