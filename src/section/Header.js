import classNames from "classnames";
import { Link } from 'react-scroll';
import Panel from "../components/Panel";

function Header (className){

    const navLinkStyling = classNames(
        'block p-3 mr-5 md:inline-block md:p-5 hover:cursor-pointer hover:text-gray-500',
        className
    );
    
    const headerLogo = "https://s24193.pcdn.co/wp-content/uploads/2016/07/entity-women-that-did-ada-lovelace-1320x720.jpg"
    return(
        <header className="fixed top-0 left-0 w-full flex md:flex-row bg-white dark:bg-slate-900">
            <Panel>
                <div className="flex p-5 md:flex-row justify-start md:space-x-8 md:p-5">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full overflow-hidden">
                        <img src={headerLogo} alt={headerLogo} className="h-full w-full object-cover"/>
                    </div>
                    <span className="flex ml-5 whitespace-nowrap items-center font-bold md:space-x-8 dark:text-indigo-500">
                        Ada Lovelace
                    </span>
                </div>
            </Panel>
            <Panel>
                <nav className="bg-white">
                    <ul className="flex flex-col whitespace-nowrap items-end md:flex-row justify-end text-sm font-bold md:space-x-8 md:m-2 md:pt-2 tracking-wide dark:text-indigo-500 dark:bg-slate-900 dark:md:m-0">
                        <li>
                        <Link
                            className={navLinkStyling}
                            to='about me' 
                            smooth={true} 
                            duration={500}
                            >
                            ABOUT ME
                            </Link>
                        </li>
                        <li>
                            <Link 
                            className={navLinkStyling}
                            to='projects' 
                            smooth={true} 
                            duration={500}
                            >
                            PROJECTS
                            </Link>
                        </li>
                        <li>
                            <Link 
                            className={navLinkStyling}
                            to='contact' 
                            smooth={true} 
                            duration={500}
                            >
                            CONTACT
                            </Link>
                        </li>
                        <li>
                            <Link
                            className={navLinkStyling}
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