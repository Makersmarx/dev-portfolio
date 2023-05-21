import classNames from "classnames";

function SectionTitles({
    children, 
    className, 
    ...rest}){
    const titleClassNames = classNames(
            'text-3xl font-bold text-center m-2 pt-4 tracking-widest',
            className
    )
    const lineClassNames = classNames(
        'h-1 w-8 mx-auto my-4 rounded bg-gradient-to-r from-cyan-500 to-blue-500" text-center',
        className
    )
    return (
        <div className="">
            <h1 className={titleClassNames}>{children}</h1>
            <hr className={lineClassNames}></hr>
        </div>
            
        )
}
export default SectionTitles;