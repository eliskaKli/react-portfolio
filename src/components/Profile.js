import profileImg from '../data/img/profileImg.jpg';

import { ButtonContact } from 'ButtonContact.js';
import { ButtonPortfolio } from 'ButtonPortfolio.js';
import { ExternalLogos } from 'ExternalLogos.js';

function Profile() {
    return(
        <div className='profile'>
            <div className='aboutMe'>
                <img src={profileImg} className='profileImg' alt='Profile'/>
                <p>Jsem Eliška Klimtová a už skoro rok se učím jak psát kód v HTML, CSS, JavaScriptu a v poslední době i v Reactu. 
                V únoru 2023 jsem pověsila minulou práci na hřebík, a vrhla jsem se do těchto nových vod na plno.</p>
                <p>Dost bylo osamoceného plavání, chci zjistit, jak se plave v týmu a naučit se nové věci.</p>
                <p>Ráda si s vámi domluvím schůzku.</p>
            </div>
            <div className='profileButtons'>
                <ButtonContact></ButtonContact>
                <ButtonPortfolio></ButtonPortfolio>
            </div>
            <ExternalLogos />
        </div>
    )
};

export default Profile;