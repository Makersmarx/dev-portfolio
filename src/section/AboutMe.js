import Panel from "../components/Panel";
import Titles from "../components/Title";
import Subtitles from "../components/Subtitles";
import Intro from "../components/Intro";
import Card from "../components/Card";
import Info from "../components/Info";
import Skills from "./Skills";

// Data to replace
    const intro1 = <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
    const paragraph1 = <p> As a <strong>full stack web developer</strong>, I have a passion for crafting innovative and user-friendly digital experiences. With a blend of front-end and back-end skills, I thrive in creating seamless and robust web applications.</p>
    const paragraph2 = <p> My journey as a web developer began several years ago when I discovered <strong>my love for coding</strong> and problem-solving. Since then, I have honed my skills and acquired a deep understanding of various programming languages, frameworks, and tools relevant to full stack development.</p>
    const paragraph3 = <p>I am excited to collaborate with like-minded individuals and contribute to <strong>impactful projects</strong> in the ever-evolving world of web development.</p>

    function AboutMe(){
    return(
        <Panel>
            <Titles>ABOUT ME</Titles>
            <Intro>{intro1}</Intro>
            <div className="flex flex-row">
                <Card className=''>
                    <Subtitles>Get to know me!</Subtitles>
                    <Info>{paragraph1}</Info>
                    <Info>{paragraph2}</Info>
                    <Info>{paragraph3}</Info>
                </Card>
                <Card>
                    <Skills/>
                </Card>
            </div>
        </Panel>
    )
};

export default AboutMe;