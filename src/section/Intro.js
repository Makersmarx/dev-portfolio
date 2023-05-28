import Panel from "../components/Panel"
import Button from "../components/Button";
import { Link } from 'react-scroll';
import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function Intro(){
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };
    return (
        <Panel id='intro' className="bg-[url('https://img.freepik.com/free-vector/elegant-white-wallpaper-with-golden-details_23-2149095007.jpg?w=2000')]  dark:bg-[url('https://i.etsystatic.com/42026790/r/il/e29cf9/4842908763/il_fullxfull.4842908763_m1b3.jpg')] bg-no-repeat bg-cover bg-center bg-fixed ">
            <section id="home">
                <h1 className="text-3xl md:text-5xl font-bold text-center pt-32 tracking-widest dark:text-indigo-400">HEY, THIS IS US</h1>
                <div className="flex justify-center text-center flex-col pb-36">
                    <h2 className='text-lg md:text-2xl p-24 lg:ml-46 lg:mr-46 xl:ml-56 xl:mr-56 dark:text-slate-400'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product. </h2>
                    <Link 
                    to='projects' 
                    smooth={true} 
                    duration={500}
                    >
                    <Button>PROJECTS</Button>
                    </Link>
                    <DarkModeSwitch
                    className='w-8'
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    size={120}
                    />
                </div>
            </section>
        </Panel>
    )
}
export default Intro;