import Panel from "../components/Panel";
import Info from "../components/Info";
import SectionTitles from "../components/SectionTitles";

// Data to replace
const contactIntro = <p> Feel free to Contact me by submitting the form below and I will get back to you as soon as possible. </p>

function Contact(){
    return (
        <Panel>
            <SectionTitles>CONTACT</SectionTitles>
            <div className="flex flex-row">
                <Info>{contactIntro}</Info>
            </div>
        </Panel>
    )
}
export default Contact;