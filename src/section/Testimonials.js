import Card from "../components/Card";
import ImageSlider from "../components/ImageSlider";
import Panel from "../components/Panel";
import SectionTitles from "../components/SectionTitles";

function Testimonials (){
    return (
        <Panel className='dark:bg-black'>
            <SectionTitles> TESTIMONIALS</SectionTitles>
               <ImageSlider />
        </Panel>
    )
}
export default Testimonials;