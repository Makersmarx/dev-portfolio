import { useState } from 'react';
import Panel from "../components/Panel";
import Info from "../components/Info";
import SectionTitles from "../components/SectionTitles";
import Card from "../components/Card";
import Button from '../components/Button';



// Data to replace
const contactIntro = <p> Feel free to Contact me by submitting the form below and I will get back to you as soon as possible. </p>

function Contact(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sendMessage = async () => {
        // try {
        //     await // set up with whatever db you are using (name, email, message)
        // } catch (err){
        //     console.log(err)
        //     setName('')
        //     setEmail('')
        //     setMessage('')
        // }
    }

    return (
        <Panel className='bg-gray-50 flex flex-col justify-center place-content-center'>
            <SectionTitles>CONTACT</SectionTitles>
                <Info className='flex justify-center text-center'>{contactIntro}</Info> 
                <Card className='bg-white rounded-lg translate-x-2/4'>
                    <h1 className='tracking-widest text-lg p-2 font-bold'>NAME</h1>
                    <input
                    placeholder="Enter Your Name "
                    onChange={(e)=>setName(e.target.value)}
                    className='bg-slate-100 w-11/12 h-12 rounded-lg p-4 tracking-widest hover:ring hover:ring-amber-100 focus:outline-none focus:ring focus:ring-amber-300' />
                     <h1 className='tracking-widest text-lg p-2 font-bold'>EMAIL</h1>
                    <input
                    placeholder="Enter Your Email "
                    onChange={(e)=>setEmail(e.target.value)}
                    className='bg-slate-100 w-11/12 h-12 rounded-lg p-4 tracking-widest hover:ring hover:ring-amber-100 focus:outline-none focus:ring focus:ring-amber-300' />
                    <h1 className='tracking-widest text-lg p-2 font-bold'>MESSAGE</h1>
                    <textarea
                    placeholder="Enter Your Message "
                    onChange={(e)=>setMessage(e.target.value)}
                    className='block p-2.5 bg-slate-100 w-11/12 h-56 rounded-lg p-4 tracking-widest hover:ring hover:ring-amber-100 focus:outline-none focus:ring focus:ring-amber-300' />
                    <Button onClick={sendMessage}>SUBMIT</Button>
                </Card>
        </Panel>
    )
}
export default Contact;