import Panel from "../components/Panel"
import Anchor from "../components/Anchor";

function Footer () {

    return (
        <footer className="bg-black py-6 px-2">
            <Panel>
                <div className="p-2">
                    <h1 className="text-lg py-6 text-white font-bold dark:text-indigo-500">SOCIAL</h1>
                    <div>
                        <Anchor>Linkedin</Anchor>
                        <Anchor>Github</Anchor>
                        <Anchor>Twitter</Anchor>
                        <Anchor>Youtube</Anchor>
                    </div>
                </div>
                <div className="text-white p-2">
                <h1 className="text-lg py-6 text-white font-bold dark:text-indigo-500" >ADA LOVELACE</h1>
                <p className="text-sm">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product. </p>
                </div>
            </Panel>
            <Panel>
                <div className="py-6 px-2">
                    <div className="border-t border-gray-300"></div>
                    <div className="text-xs text-white pt-6">Copy Right</div>
                </div>
                
            </Panel>
        </footer>
        
    )
};

export default Footer;