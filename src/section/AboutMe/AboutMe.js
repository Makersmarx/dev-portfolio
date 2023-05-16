import Panel from "../../components/Panel";
import { aboutMe } from "./constants";

function AboutMe(){
    return(
        <Panel title="About me" body={aboutMe}/>
    )
};

export default AboutMe;