import Panel from "../components/Panel";
import Subtitles from "../components/Subtitles";
import Intro from "../components/Intro";

// Data to replace
const intro1 = <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>

function AboutMe(){
    return(
        <Panel>
            <Subtitles>ABOUT ME</Subtitles>
            <div className="flex flex-row">
                <Intro>{intro1}</Intro>
            </div>
        </Panel>
    )
};

export default AboutMe;