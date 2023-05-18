import Card from "../components/Card";
import PanelTwo from "../components/PanelTwo";
import Subtitles from '../components/Subtitles'
import Button from '../components/Button'
import Info from "../components/Info";
import Anchor from "../components/Anchor";
import Media from "../components/Media";

function Projects(){
    const handleClick = ({ children, className, ...rest }) => {
    };
    return (
        <PanelTwo>
            <Subtitles> MY PROJECTS </Subtitles>
            <div className='flex flex-row'>
                <Card>
                    <Media><img alt='cute kitten' src='https://myawsbucketmundoimages.s3.us-east-2.amazonaws.com/laptop-removebg-preview.png'></img></Media>
                </Card>
                <Card>
                    <Info>
                    Lorem Ipsum is simply dummy text of the <strong>printing and typesetting</strong> industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type <strong>specimen</strong> book.
                    <p> It has survived not only <strong>five centuries</strong>, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like <strong>Aldus PageMaker</strong> including versions of Lorem Ipsum.</p>
                    </Info>
                    <Anchor><a href="https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*">Test Link</a></Anchor>
                    <Button onClick={handleClick}> VIEW PROJECT
                    </Button>
                </Card>
            </div>
            
        </PanelTwo>
    )
}
export default Projects;