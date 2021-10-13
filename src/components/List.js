import React from "react";
import ListItem from "./ListItem";





function List (props){

    return(<ul>
        {props.items.map(item =><ListItem  key={item.id} item={item} OnDone={props.OnDone} OnDelete={props.OnDelete}  ></ListItem>)}
                                        
        
    </ul>)
    
    
    }

export default List ;