import classNames from "classnames";

function Anchor ({ 
    children, 
    className, 
    ...rest 
}){
    const anchorClassNames = classNames(
        // Consistant styling
        'text-amber-300 underline font-bold',
        className
    );
    return (
        <p className={anchorClassNames}>{children} </p>
    )
}
export default Anchor