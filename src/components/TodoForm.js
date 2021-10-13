import React, { useState } from "react";

function TodoForm (props){

    const [text,setText] = useState("")

    function handechange(event){
        let t = event.target.value;
           setText(t);
           
       }
   
   
       function addItem (event){
           event.preventDefault();
           if(text!=""){
           props.addNItem(text);
           setText("");
           }
           
       }

   return(     <form>
            <input onChange={handechange} type ="text" value ={text}></input>
            <button onClick= {addItem}>Add</button>
        </form>

   )

}



export default TodoForm ;