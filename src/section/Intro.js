import Panel from "../components/Panel"
import Button from "../components/Button";

function Intro(){
    return (
        <Panel className="bg-[url('https://img.freepik.com/free-vector/elegant-white-wallpaper-with-golden-details_23-2149095007.jpg?w=2000')] bg-no-repeat bg-cover bg-center bg-fixed">
            <h1 className="text-5xl font-bold text-center pt-32 tracking-widest">HEY, THIS IS US</h1>
            <div className="flex justify-center text-center flex-col pb-36">
                <h2 className='text-2xl p-24'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product. </h2>
                <Button>PROJECTS</Button>
            </div>
            
        </Panel>
    )
}
export default Intro;