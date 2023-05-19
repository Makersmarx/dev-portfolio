import classNames from "classnames";

function Tile(props){
        // const skillTileClassNames = classNames(
        //         'bg-slate-200 text-gray-500 rounded-md p-1 m-1 inline-block',
        //         className
        //     )
   
    return (
        <div className='bg-slate-200 text-gray-500 rounded-md p-1 m-1 inline-block'>
            <span>{props.skill}</span>
        </div>
    )
}
export default Tile;