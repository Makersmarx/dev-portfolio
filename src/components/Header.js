import classNames from "classnames";
import { Link } from 'react-scroll';

function Header (){
    const headerLogo = "https://s24193.pcdn.co/wp-content/uploads/2016/07/entity-women-that-did-ada-lovelace-1320x720.jpg"
    return(
        <header className="flex mx-8 my-5">
            <div className="flex items-center justify-center h-12 w-12 rounded-full overflow-hidden">
                <img src={headerLogo} alt={headerLogo} className="h-full w-full object-cover"/>
            </div>
            <span>
                Ada Lovelace
            </span>
            <nav>
                <ul>
                    <li>
                        <Link 
                        to='intro' 
                        smooth={true} 
                        duration={500}
                        >
                        HOME
                        </Link>
                    </li>
                    <li>
                    <Link 
                        to='about me' 
                        smooth={true} 
                        duration={500}
                        >
                        ABOUT ME
                        </Link>
                    </li>
                    <li>
                        <Link 
                        to='projects' 
                        smooth={true} 
                        duration={500}
                        >
                        PROJECTS
                        </Link>
                    </li>
                    <li>
                        <Link 
                        to='contact' 
                        smooth={true} 
                        duration={500}
                        >
                        CONTACT
                        </Link>
                    </li>
                    <li>
                        <Link 
                        to='testimonials' 
                        smooth={true} 
                        duration={500}
                        >
                        TESTIMONIALS
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Header;