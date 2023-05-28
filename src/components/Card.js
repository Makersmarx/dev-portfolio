import classNames from 'classnames';

function Card ({ 
    children, 
    className, 
    ...rest 
}){

    const containerClassNames = classNames(
        //Styling that will stay consistant
        'w-11/12 ml-6 md:w-4/12 md:-ml-0 h-auto m-2 p-8 dark:bg-slate-800 rounded-md dark:border dark:border-cyan-500',
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