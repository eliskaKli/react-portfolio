import React from 'react';

import { FaLinkedin } from 'react-icons/fa';

function ButtonContact() {
    function openLinkLI() {
        //tady mě to přesměruje na můj LinkedIn profil
    };

    return(
        <div onClick={openLinkLI} className='contactButton'>
            <p>Kontaktujte mě na LinkedIn
            <img src={FaLinkedin} className='linkedInLogo' alt='LinkedIn'/> 
            </p>        
        </div>
    )
};

export default ButtonContact;