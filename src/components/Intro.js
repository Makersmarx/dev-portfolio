import classNames from "classnames"

function Intro({ 
    children, 
    className, 
    ...rest }){
    const paragraphClassNames = classNames(
            'text-1xl text-center mx-auto h-32 w-3/5 pt-4 space-y-4 flex justify-center',
            className
        )
    return (
        <p className={paragraphClassNames}>
           {children} 
        </p>
    )
}
export default Intro;