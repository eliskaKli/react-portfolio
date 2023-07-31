import React from "react";

import { FaGithub,FaLinkedin } from 'react-icons/fa';

function ExternalLogos() {
    return(
        <div className="logos">
            <div className="gitHub">
                <img src={FaGithub} alt="LinkedIn"/>
                <p>gitHub</p>
            </div>
            <div className="LinkedIn">
                <img src={FaLinkedin} alt="LinkedIn"/>
                <p>LinkedIn</p>
            </div>
        </div>     
    )
};

export default ExternalLogos;