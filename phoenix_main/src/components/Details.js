import React from "react";
import Navbar from "./Navbar";
import Appcss from "../App.module.css";
import {FaEnvelope, FaLinkedinIn} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FaEnvelopeOpenText} from 'react-icons/fa';





function Details(props)
{
    return (
       <div className={Appcss.detailsdiv}>
        
        <h1 className={Appcss.teamname}>{props.name}</h1>
        <div className={Appcss.icons}>
            <a href={props.link1}><FaLinkedinIn className={Appcss.iconStyle}/></a>
            <a href={props.link1}><FaInstagram className={Appcss.iconStyle}/></a>
            <a href={props.link1}><FaFacebookF className={Appcss.iconStyle}/></a>
           <a href={props.link1}><FaEnvelopeOpenText className={Appcss.iconStyle}/></a> 
        </div>
           
      
       </div>
    );
}

export default Details;