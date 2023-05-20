import classNames from "classnames"

function Info({ 
    children, 
    className, 
    ...rest }){
    const paragraphClassNames = classNames(
            'text-1xl m-2 pt-4 space-y-4 flex',
            className
        )
    return (
        <p className={paragraphClassNames}>
           {children} 
        </p>
    )
}
export default Info;