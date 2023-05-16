import Button from "./Button";

function Card ({ children }){
    const handleClick = () => {
    };

    return (
        <div className='w-2/4 bg-slate-100 h-96'>
            <h1 className='text-2xl font-bold m-2 pt-4 '>Lorem Ipsum</h1>
            <div className='space-y-4 m-2'>
            <p>Lorem Ipsum is simply dummy text of the <strong>printing and typesetting</strong> industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type <strong>specimen</strong> book. </p>

            <p> It has survived not only <strong>five centuries</strong>, but also the leap into electronic typesetting, <a rel='' href='https://www.lipsum.com/' className='text-amber-300 underline font-bold'>remaining </a>essentially unchanged. </p>
           
            
            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like <strong>Aldus PageMaker</strong> including versions of Lorem Ipsum.</p>
            </div>
            <Button onClick={handleClick}>
                CONTACT
            </Button>
        </div>
    )
}
export default Card;