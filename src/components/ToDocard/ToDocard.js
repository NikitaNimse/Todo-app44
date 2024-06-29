import React from "react";
import "./ToDocard.css";
import ImgDel from "./bin.png"

function ToDocard ({index,task,category,deleteItem}) {
  
  const CATEGORY_EMOGI_MAP ={
    learning: "📚",
    work:"💼",
    personal:"🏠",
    shopping:"🛒",
    health:"🏥",
    other:"📓"
   }
   const CATEGORY_COLORS ={
    learning: "blue",
    work:"green",
    personal:"purple",
    shopping:"orange",
    health:"red",
    other:"grey"
   }
  return (
    <div className="ToDocard">
     <img src={ImgDel} alt="delete" className="Delete-Icon" onClick={()=>{
      deleteItem(index)
     }}/>
     {task}
     <span className ="category" style={{backgroundColor: CATEGORY_COLORS   [category] }} >
     {CATEGORY_EMOGI_MAP[category]} {category} </span>

    </div>
  )
}
export default ToDocard