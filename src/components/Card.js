import classNames from 'classnames';

function Card ({ 
    children, 
    className, 
    ...rest 
}){

    const containerClassNames = classNames(
        //Styling that will stay consistant
        'w-full md:w-2/4 h-auto m-2 p-8',
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