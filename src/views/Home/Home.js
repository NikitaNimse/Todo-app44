import "./Home.css";
import addIcon from "./plus (1).png";

import ToDocard from "../../components/ToDocard/ToDocard";
import { useState} from "react";
import toast, {Toaster} from 'react-hot-toast';



function Home () {
    
 
   const [todolist, setTodolist ] = useState([])

   const [newTask, setNewTask] = useState("")
   const [category, setCategory] = useState("")

   
   useEffect (() =>{
    const savedtodolist =localStorage.getItem("todolist")
    if(savedtodolist){
     setTodolist(JSON.parse(savedtodolist))
    }
    },[])

  useEffect(() =>{
   if(todolist.length === 0) return
   localStorage.setItem("todolist", JSON.stringify (todolist))
  }, [todolist])

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

<select className="category-select" 
         value={category}
         onChange={(e)=>setCategory(e.target.value)}
       
         >
         <option  value="">Category</option>
          <option value="learning"> Learning  </option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="shopping">Shopping</option>
          <option value="health">Health</option>
          <option value="other">Other</option>
         </select>

        

        < img 
        src={addIcon} 
        alt="addicon" 
        className="Icon" 
        onClick={()=>{
          if (newTask === "" || category===""){
            toast.error('task or category cant be empty!')
            return
          }
          
          setTodolist([...todolist,{task:newTask, category:category}])
          setNewTask ("")
          setCategory ("")
          toast.success('task added successfully!')
        }}
        />
        
    </div>
    
 
  </div>
    
  </>
   )
}
export default Home