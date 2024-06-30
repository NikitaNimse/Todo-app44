import "./Home.css";
import addIcon from "./plus (1).png";

import ToDocard from "../../components/ToDocard/ToDocard";
import { useState} from "react";



function Home () {
    
 
   const [todolist, setTodolist ] = useState([])

   const [newTask, setNewTask] = useState("")
   const [category, setCategory] = useState("")

  return (<>
  <div>
     <h1 className="heading"> To Do App📒</h1>
      <div className="todo-list-container">
        
        {
         todolist.map((todoItem, i) =>{
          const {task,category} = todoItem
         
        return  <ToDocard key={i}  task={task} category={category}   /> 
        })
       }
       {
        todolist.length === 0 ?
        <p style={{textAlign:"center"}}> Please add New task </p>
        :
        null
       }
       
       </div>
    <div className="container">
        <input 
        type="text"
         placeholder="add a task here" 
         className="add-input" 
         value={newTask}
         onChange={(e)=>setNewTask(e.target.value)
       }
         />
        

        < img 
        src={addIcon} 
        alt="addicon" 
        className="Icon" 
        onClick={()=>{
         if (newTask === "" ){
         
            return
          }
          
          setTodolist([...todolist,{task:newTask, category:category}])
          setNewTask ("")
          setCategory ("")
         
        }}
        />
        
    </div>
    
 
  </div>
    
  </>
   )
}
export default Home