import Card from "../components/Card";
import ImageSlider from "../components/ImageSlider";
import Panel from "../components/Panel";
import SectionTitles from "../components/SectionTitles";

function Testimonials (){
    return (
        <Panel className='bg-gray-50'>
            <SectionTitles> TESTIMONIALS</SectionTitles>
            <Card className='flex justify-center'>
               <ImageSlider></ImageSlider> 
            </Card>
        </Panel>
    )
}
export default Testimonials;