import classNames from "classnames";

function Titles({
    children, 
    className, 
    ...rest}){
    const titleClassNames = classNames(
            'text-3xl font-bold text-center m-2 pt-4 tracking-widest',
            className
    )
    const lineClassNames = classNames(
        'h-1 w-8 mx-auto my-4 rounded bg-amber-300 text-center',
        className
    )
    return (
        <div className="">
            <h1 className={titleClassNames}>{children}</h1>
            <hr className={lineClassNames}></hr>
        </div>
            
        )
}
export default Titles;