import classNames from 'classnames';

function Card ({ 
    children, 
    className, 
    ...rest 
}){

    const containerClassNames = classNames(
        //Styling that will stay consistant
        'w-2/4 h-auto space-y-4 m-2 ',
        //Accounts for customization
        className
    );

    return (
        <div {...rest} className={containerClassNames}>
            {children}
        </div>
    )
}
export default Card;