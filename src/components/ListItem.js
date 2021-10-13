import React from "react";
import Card from "./card";

function Doneimg(props){
if (!props.done){
    return <img  src="./assets/notdone.png"></img>
} else
        return <img  src="./assets/done.png"></img>


}



function ListItem (props){

    return(

        <li >
            <Card className={props.item.done?"done item":"item"} >
            {props.item.text}
            <div>
            <button className="delete" onClick= {() => props.OnDelete(props.item)}>Delete</button>
            <button className="isdone" onClick= {() => props.OnDone(props.item)}><Doneimg done ={props.item.done}></Doneimg></button>
            </div>  
            </Card>  
        </li>)
    
    
    
}

export default ListItem ;