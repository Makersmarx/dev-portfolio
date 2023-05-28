import Card from "../components/Card";
import ImageSlider from "../components/ImageSlider";
import Panel from "../components/Panel";
import SectionTitles from "../components/SectionTitles";


function Testimonials (){
    return (
        <Panel className='relative bg-white dark:bg-black'>
            <div id="testimonials-anchor" className="anchor"></div>
            <section id='testimonials'>
            <SectionTitles> TESTIMONIALS</SectionTitles>
               <ImageSlider />
            </section>
        </Panel>
    )
}
export default Testimonials;