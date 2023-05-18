import classNames from "classnames";

function Anchor ({
    href, 
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
        <a href={href} className={anchorClassNames}>{children} </a>
    )
}
export default Anchor