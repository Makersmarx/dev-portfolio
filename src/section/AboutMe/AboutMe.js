import Panel from "../../components/Panel";
import { aboutMe } from "./constants";

function AboutMe(){
    return(
        <Panel title="ABOUT ME" body={aboutMe}/>
    )
};

export default AboutMe;