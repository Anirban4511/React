export default function Boxes(props){
    return (
        <div onClick={props.onClick} style={{backgroundColor:"purple",
            border:"1px solid black",height:"100px",width:"100px",display:"flex",justifyContent:"center",alignItems:"center",margin:"12px"}}>
            <h1 style={{color:"white"}}>{props.value}</h1>
        </div>
    )
}