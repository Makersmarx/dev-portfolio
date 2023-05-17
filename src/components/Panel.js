import { MinusIcon } from '@heroicons/react/outline';

function Panel(props){
    return (
    <div className="w-full h-48  bg-slate-100 border border-indigo-600"> 
        <h1 className="text-3xl font-bold text-center m-2 pt-4">
            {props.title}
            <MinusIcon className="w-6 h-6 text-yellow-500 "/>
        </h1>
        <div className='space-y-4 m-2'>
        <p className="text-1xl text-center m-2 pt-4">{props.body}</p>
        </div>
        
    </div>
    )
}   
    
export default Panel;