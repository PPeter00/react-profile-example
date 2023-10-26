import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/p.png';
import LogoSubtitle from '../../assets/code.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn, faSkype, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Sidebar = () => {

    return(
        <div className='nav-bar'>
        <Link className='logo' to='/react-profile-example/'>
         <img src={LogoS} alt='' />
         <img src={LogoSubtitle} alt='' className='sub-logo'/>
        </Link>

        <nav>
         <NavLink exact="true" activeclassname="active" to='/react-profile-example/'>
             <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
         </NavLink>

         <NavLink exact="true" activeclassname="active" className="about-link" to='/react-profile-example/about'>
             <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
         </NavLink>

         <NavLink exact="true" activeclassname="active" className="contact-link" to='/react-profile-example/contact'>
             <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
         </NavLink>

        </nav>
        <ul>
            <li>
                <a 
                target="_blank"
                rel="noreferrer"
                href='https:/www.linkedin.com/in/slobodan-gaji/'
                >
                    <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a 
                target="_blank"
                rel="noreferrer"
                href='https:/www.linkedin.com/in/slobodan-gaji/'
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a 
                target="_blank"
                rel="noreferrer"
                href='https:/www.linkedin.com/in/slobodan-gaji/'
                >
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a 
                target="_blank"
                rel="noreferrer"
                href='https:/www.linkedin.com/in/slobodan-gaji/'
                >
                    <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                </a>
            </li>
        </ul>
     </div>

    )
    
}

export default Sidebar;