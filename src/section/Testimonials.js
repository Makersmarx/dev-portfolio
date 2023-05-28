import Card from "../components/Card";
import ImageSlider from "../components/ImageSlider";
import Panel from "../components/Panel";
import SectionTitles from "../components/SectionTitles";


function Testimonials (){
    return (
        <Panel className='bg-white dark:bg-black'>
            <section id='testimonials'>
            <SectionTitles> TESTIMONIALS</SectionTitles>
               <ImageSlider />
            </section>
            
        </Panel>
    )
}
export default Testimonials;