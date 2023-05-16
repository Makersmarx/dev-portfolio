function Panel(props){
    return (
    <div className="w-full h-100px border border-indigo-600"> 
        <h1 className="font-bold">{props.title}</h1>
        <span>{props.body}</span>
    </div>
    )
}
    
    
export default Panel;