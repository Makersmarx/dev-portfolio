import classNames from "classnames";

function Subtitles({
    children, 
    className, 
    ...rest}){
    const subTitleClassNames = classNames(
            'text-xl md:text-2xl font-bold text-left md:m-2 md:pt-4 tracking-wide dark:text-indigo-500',
            className
    )

    return (
        <div className="">
            <h1 className={subTitleClassNames}>{children}</h1>
        </div>
    )
}
export default Subtitles;