import classNames from "classnames";

function Anchor ({
    href, 
    children, 
    className, 
    ...rest 
}){
    const anchorClassNames = classNames(
        // Consistant styling
        'text-amber-300 underline font-bold hover:underline-offset-4 focus:ring focus:ring-amber-300 dark:text-indigo-500 dark:focus:ring-indigo-500',
        className
    );
    return (
        <a href={href} className={anchorClassNames}>{children} </a>
    )
}
export default Anchor