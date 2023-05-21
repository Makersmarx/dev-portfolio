import classNames from "classnames";

function Button ({
    children,
    className,
    ...rest
}){
    const buttonClassNames = classNames(
        'bg-gradient-to-r from-cyan-500 to-blue-500" w-40 h-12 mt-4 rounded drop-shadow-lg text-sm font-bold tracking-widest hover:bg-yellow-300 active:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-300',
        className
    )
    return (
        <div className=''>
            <button 
                {...rest} 
                className={buttonClassNames}>
                {children}
            </button>
        </div>
    )
}
export default Button;