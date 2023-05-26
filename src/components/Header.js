import classNames from "classnames";
import { Link } from 'react-scroll';
import Panel from "./Panel";

function Header (){
    
    const headerLogo = "https://s24193.pcdn.co/wp-content/uploads/2016/07/entity-women-that-did-ada-lovelace-1320x720.jpg"
    return(
        <header className="flex md:flex-row mx-12 my-5">
            <Panel>
                <div className="flex md:flex-row justify-start md:space-x-8">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full overflow-hidden">
                        <img src={headerLogo} alt={headerLogo} className="h-full w-full object-cover"/>
                    </div>
                    <span className="flex items-center justify-center font-bold dark:text-indigo-500">
                        Ada Lovelace
                    </span>
                </div>
            </Panel>
            <Panel>
                <nav>
                    <ul className="flex md:flex-row justify-end text-sm font-bold hover:cursor-pointer md:space-x-8 md:m-2 md:pt-2 tracking-wide dark:text-indigo-500">
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
            </Panel>
        </header>
    )
};

export default Header;