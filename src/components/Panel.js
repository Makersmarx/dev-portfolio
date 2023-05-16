function Panel(props){
    return (
    <div className="w-full h-48  bg-slate-100 border border-indigo-600"> 
        <h1 className="text-3xl font-bold text-center m-2 pt-4">{props.title}</h1>
        <span className="text-1xl text-center m-2 pt-4" >{props.body}</span>
    </div>
    )
}
    
    
export default Panel;