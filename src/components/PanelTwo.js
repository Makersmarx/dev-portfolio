import classNames from "classnames";

function PanelTwo({
    children, 
    className, 
    ...rest}){
        
    const panelClassNames = classNames(
        'w-full h-fit  bg-slate-100 border border-white border-4 ',
        className
    );
    return (
    <div className={panelClassNames}>
        {children} 
    </div>
    )
}
export default PanelTwo;
