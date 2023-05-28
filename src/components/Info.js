import classNames from "classnames"

function Info({ 
    children, 
    className, 
    ...rest }){
    const paragraphClassNames = classNames(
            'text-base m-8 md:text-1xl md:p-2 dark:text-slate-400',
            className
        )
    return (
        <p {...rest} className={paragraphClassNames}>
           {children} 
        </p>
    )
}
export default Info;