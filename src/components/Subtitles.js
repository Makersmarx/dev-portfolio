import classNames from "classnames";

function Subtitles({
    children, 
    className, 
    ...rest}){
    const titleClassNames = classNames(
            'text-2xl font-bold text-left m-2 pt-4 tracking-wide',
            className
    )

    return (
        <div className="">
            <h1 className={titleClassNames}>{children}</h1>
        </div>
    )
}
export default Subtitles;