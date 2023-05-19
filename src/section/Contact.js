import Panel from "../components/Panel";
import Intro from "../components/Intro";
import Subtitles from "../components/Subtitles";

// Data to replace
const contactIntro = <p> Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>

function Contact(){
    return (
        <Panel>
            <Subtitles>CONTACT</Subtitles>
            <div className="flex flex-row">
                <Intro>{contactIntro}</Intro>
            </div>
        </Panel>
    )
}
export default Contact;