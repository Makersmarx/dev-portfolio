import Panel from "../components/Panel";
import Intro from "../components/Intro";
import Titles from "../components/Title";

// Data to replace
const contactIntro = <p> Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>

function Contact(){
    return (
        <Panel>
            <Titles>CONTACT</Titles>
            <div className="flex flex-row">
                <Intro>{contactIntro}</Intro>
            </div>
        </Panel>
    )
}
export default Contact;