import Panel from "../components/Panel";
import Info from "../components/Info";
import SectionTitles from "../components/SectionTitles";
import Card from "../components/Card";


// Data to replace
const contactIntro = <p> Feel free to Contact me by submitting the form below and I will get back to you as soon as possible. </p>

function Contact(){
    return (
        <Panel className='bg-gray-50 flex flex-col justify-center place-content-center'>
            <SectionTitles>CONTACT</SectionTitles>
                <Info className='flex justify-center text-center'>{contactIntro}</Info> 
        </Panel>
    )
}
export default Contact;