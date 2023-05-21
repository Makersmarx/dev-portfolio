import classNames from "classnames"

function Info({ 
    children, 
    className, 
    ...rest }){
    const paragraphClassNames = classNames(
            'text-1xl p-2',
            className
        )
    return (
        <p {...rest} className={paragraphClassNames}>
           {children} 
        </p>
    )
}
export default Info;