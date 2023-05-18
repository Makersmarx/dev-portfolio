import classNames from "classnames"

function Media({
    children,
    className,
    ...rest
}){
    const finalMediaClassNames = classNames(
        'w-9/12 ml-8 -mt-10',
        className
    )
    return (
        <div className={finalMediaClassNames}>
            {children}
        </div>
    )
}
export default Media;