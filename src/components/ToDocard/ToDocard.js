import React from "react";
import "./ToDocard.css";


function ToDocard ({index,task,category}) {
  


  return (
    <div className="ToDocard">
   
     {task}
     <span className ="category" >
     {CATEGORY_EMOGI_MAP[category]} {category} </span>

    </div>
  )
}
export default ToDocard