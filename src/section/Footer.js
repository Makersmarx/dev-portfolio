import Panel from "../components/Panel"
import Anchor from "../components/Anchor";

function Footer () {

    return (
        <footer className="bg-black">
            <Panel>
                <div>
                    <h1 className="text-lg text-white p-2 font-bold dark:text-indigo-500">SOCIAL</h1>
                    <div>
                        <Anchor>Linkedin</Anchor>
                        <Anchor>Github</Anchor>
                        <Anchor>Twitter</Anchor>
                        <Anchor>Youtube</Anchor>
                    </div>
                </div>
                <div className="text-white">
                <h1 className="text-lg p-2 font-bold dark:text-indigo-500" >Ada Lovelace</h1>
                <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product. </p>
                </div>
            </Panel>
            <Panel>
                <div>Copy Right</div>
            </Panel>
        </footer>
        
    )
};

export default Footer;