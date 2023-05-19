import classNames from "classnames"

function Media({
    src,
    alt, 
    children,
    className,
    ...rest
}){
    const finalMediaClassNames = classNames(
        'w-9/12 max-w-xl mb-4 rounded-lg border border-8 border-gray-600 relative',
        className
    )
    const isVideo = src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg') || src.endsWith('.MOV');
    
    if (isVideo) {
        return(
        <div className="flex justify-center p-4">
            <video className={finalMediaClassNames} controls>
                <source src={src} type="video/mp4" />
                <source src={src} type="video/webm" />
                <source src={src} type="video/ogg" />
                <source src={src} type="video/MOV" />
                Your browser does not support the video tag.
            </video>
        </div>
       
        );
    }
        return (
            <div className="flex justify-center p-4">
                <img src={src} alt={alt} className={finalMediaClassNames} />
            </div>
        )
        
}
export default Media;