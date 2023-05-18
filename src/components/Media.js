import classNames from "classnames"

function Media({
    type,
    src,
    alt, 
    children,
    className,
    ...rest
}){
    const finalMediaClassNames = classNames(
        'w-9/12 max-w-md',
        className
    )
    return (
        <div className='flex justify-center'>
            {type === 'video/mp4' ? (<video controls><source src={src} type='video/mp4'>Your browser does not support this video type.</source></video>) 
            // Look into video library, only supporting MP4 and ogg is very limiting. 
            : (<img src={src} alt={alt} className={finalMediaClassNames} />)}        
        </div>
        
    )
}
export default Media;