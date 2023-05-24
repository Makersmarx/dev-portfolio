import classNames from "classnames";

function Tile({ skill }){
        // const skillTileClassNames = classNames(
        //         'bg-slate-200 text-gray-500 rounded-md p-1 m-1 inline-block',
        //         className
        //     )
   
    return (
        <div className='bg-slate-200 text-gray-500 rounded-md p-3 m-1 inline-block drop-shadow-sm'>
            <span>{skill}</span>
        </div>
    )
}
export default Tile;