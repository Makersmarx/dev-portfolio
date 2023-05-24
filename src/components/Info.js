import classNames from "classnames"

function Info({ 
    children, 
    className, 
    ...rest }){
    const paragraphClassNames = classNames(
            'text-base md:text-1xl md:p-2',
            className
        )
    return (
        <p {...rest} className={paragraphClassNames}>
           {children} 
        </p>
    )
}
export default Info;