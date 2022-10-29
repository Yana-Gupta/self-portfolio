import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoY3 from '../../assets/images/LogoY3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {

    return(

        <div className="nav-bar">
            <Link className="logo" to='/'>
                <img src={LogoY3} alt="" />
            </Link>

            <nav>
                <NavLink exact="true" className="navItemLink home-link" to="/">
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e'/> 
                </NavLink>

                <NavLink exact="true" className="navItemLink about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e'/> 
                </NavLink>

                <NavLink exact="true" className="navItemLink contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/> 
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yana-gupta-8a136a22a/">
                        <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.github.com/anaagupta">
                        <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>

    );
}

export default Sidebar;