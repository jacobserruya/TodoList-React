import React, { useEffect, useState } from "react";
import "./Todo.css"
import "./components/Item"
import List from "./components/List";
import Modal from "./components/Modal";
import TodoForm from "./components/TodoForm";
import Item from "./components/Item";
function Todo (){

 const SAVED_ITEMS =   "saveditems"
 const [items,setItems] = useState([])
 const[showModal,setShowModal] =useState(false)

useEffect(()=>{

let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))  
   if (savedItems){
       setItems(savedItems)
   } 

},[])



useEffect(function () {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
 } , [items])

function addNItem(text){
let item = new Item (text)
setItems([...items,item]) 
onHideModal();

}
function OnDelete (item){
 let filteredItems = items.filter(it => it.id != item.id)  
setItems(filteredItems)
}




function OnDone (item){

    let updatedItems = items.map(
        it =>{ 
        if( it.id === item.id) 
       it.done=!it.done
         return it  //NO MAP TENQUE RETORNAR PRA CADA UM NE!!!
    })

   setItems(updatedItems)
   }


   function onHideModal(){
   
    setShowModal(false)
    }



return(<div className="container">
       <header className="header"><h1>Todo List</h1><button onClick={()=>setShowModal(true)} className="addButton">+</button></header>
      
        <List OnDone={OnDone} OnDelete={OnDelete} items ={items} ></List>
        <Modal onHideModal={onHideModal} show={showModal} ><TodoForm addNItem ={addNItem}> </TodoForm></Modal>
    </div>)

}









export default Todo ;