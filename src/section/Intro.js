import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import Panel from "../components/Panel"
import Button from "../components/Button";
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Anchor from "../components/Anchor";

function Intro(){
    const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;

    if (newDarkMode) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }

    setDarkMode(newDarkMode);
  };

  const hyperlink = {
    linkedin:"https://www.linkedin.com/company/ada-lovelace-institute/?originalSubdomain=uk",
    github: "https://gist.github.com/Jen-pac/9951c97cbd17bdece65525bef1a53a2f",
    twitter:"https://twitter.com/AdaLovelaceInst?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    youtube: "https://www.youtube.com/watch?v=J7ITqnEmf-g"
}

const hyperlinkToRender = (hyperlink) => {
    return Object.values(hyperlink);
  };
    return (
        <Panel id='intro' className="bg-[url('https://img.freepik.com/free-vector/elegant-white-wallpaper-with-golden-details_23-2149095007.jpg?w=2000')]  dark:bg-[url('https://i.etsystatic.com/42026790/r/il/e29cf9/4842908763/il_fullxfull.4842908763_m1b3.jpg')] bg-no-repeat bg-cover bg-center bg-fixed ">
            <section id="home">
                <h1 className="text-3xl md:text-5xl font-bold text-center pt-32 tracking-widest dark:text-indigo-400">HEY, THIS IS US</h1>
                <div className="flex justify-center text-center flex-col pb-36">
                    <h2 className='text-lg md:text-2xl p-24 lg:ml-46 lg:mr-46 xl:ml-56 xl:mr-56 dark:text-slate-400'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product. </h2>
                    <div>
                        <div className="invisible md:visible h-72 w-12 bg-white flex flex-col rounded justify-center p-2 gap-8 drop-shadow-md dark:bg-slate-900">
                            <Anchor className="pr-6 focus:ring-0" href={hyperlinkToRender(hyperlink)[0]}><FaLinkedin size={24}/></Anchor>
                            <Anchor className="pr-6 focus:ring-0" href={hyperlinkToRender(hyperlink)[1]}><FaGithub size={24}/></Anchor>
                            <Anchor className="pr-6 focus:ring-0" href={hyperlinkToRender(hyperlink)[2]}><FaTwitter size={24}/></Anchor>
                            <Anchor className="pr-6 focus:ring-0" href={hyperlinkToRender(hyperlink)[3]}><FaYoutube size={24}/></Anchor>
                        </div>
                        <div className='-translate-y-44'>
                        <Link 
                        to='projects' 
                        smooth={true} 
                        duration={500}
                        >
                        <Button>PROJECTS</Button>
                        </Link>
                        <div className='flex justify-center'>
                            <DarkModeSwitch
                            className='w-8 h-8 m-24 p-2 border border-amber-300 text-amber-300 rounded-full dark:border-indigo-500 dark:text-indigo-500'
                            checked={isDarkMode}
                            onChange={toggleDarkMode}
                            size={120}
                            />
                        </div> 
                        </div>
                        
                    </div>
                    
                    
                </div>
            </section>
        </Panel>
    )
}
export default Intro;