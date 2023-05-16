function Button ({
    children,
    ...rest
}){
    return (
        <div className=''>
            <button {...rest} className='bg-amber-300 w-40 h-12 rounded drop-shadow-lg text-sm font-bold tracking-widest'>
                {children}
            </button>
        </div>
    )
}
export default Button;