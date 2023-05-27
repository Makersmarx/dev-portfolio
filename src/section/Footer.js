import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import Panel from "../components/Panel"
import Anchor from "../components/Anchor";

function Footer () {

    const feDevName = "Ada Lovelace"
    const currentYear = new Date().getFullYear();
    
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
        <footer className="flex flex-col bg-black py-6 px-2">
            <Panel>
                <div className="">
                    <div className="md:flex-row p-2 text-white">
                        <h1 className="text-lg py-6 text-white font-bold dark:text-indigo-500">SOCIAL</h1>
                        <div className="flex">
                                <Anchor className="pr-6" href={hyperlinkToRender(hyperlink)[0]}><FaLinkedin size={24}/></Anchor>
                                <Anchor className="pr-6" href={hyperlinkToRender(hyperlink)[1]}><FaGithub size={24}/></Anchor>
                                <Anchor className="pr-6" href={hyperlinkToRender(hyperlink)[2]}><FaTwitter size={24}/></Anchor>
                                <Anchor className="pr-6" href={hyperlinkToRender(hyperlink)[3]}><FaYoutube size={24}/></Anchor>
                        </div>
                    </div>
                    <div className="md:flex-row text-white p-2">
                        <h1 className="text-lg py-6 text-white font-bold dark:text-indigo-500" >{feDevName.toUpperCase()}</h1>
                        <p className="text-sm pb-12">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product. </p>
                    </div>
                </div>
            </Panel>
            <Panel>
                <div className="border-t border-gray-300"></div>
                <div className="flex justify-center py-6 px-2">
                    <div className="w-4 h-4 rounded-full bg-black border border-white flex justify-center items-center">
                        <span className="text-white text-base">C</span>
                    </div>
                    <div className="text-xs text-white pl-2 flex items-center">Copy Right {currentYear}. Made by {feDevName}.</div>
                </div>
            </Panel>
        </footer>
        
    )
};

export default Footer;