import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [toDos,setTodos] = useState([])  // store in an array 
  const [toDo,setTodo] = useState('')   // for undestanding the type status


  
    function removeList(item){
      setTodos([...toDos].filter((currItem)=>{
        return currItem != item
      }))
    }
  
  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />  
      
      <i onClick={()=>setTodos([...toDos,{id:Date.now(), text : toDo ,status : false}])}  className="fas fa-plus"></i>  
    </div>
       
    <div className="todos">
    
      

    {  
      toDos.map((obj)=>{
        return(          // only one can return so write in a div
        <div className="todo">
        <div className="left">
          <input onChange={(e)=>{
            console.log(e.target.checked)
            console.log(obj)
            setTodos(toDos.filter(obj2=>{
              if(obj2.id === obj.id){
                obj2.status = e.target.checked
              }
              return obj2  // obj2 return the toDos  new array with all elements that pass the test implimented by the provided function. -- filter
            }))
          }} value = {obj.status} type="checkbox" name="" id="" />
          <p>{obj.text}</p>
        </div>
        <div className="right">
          <i className="fas fa-times" onClick={()=>{
            removeList(obj)
          }}></i>
        </div>
      </div> 
        )
      })
    }
    {toDos.map((obj)=>{
      if(obj.status){
        return( <h4 style={{color:'white'}}>{obj.text}</h4> )
      }
      return null
    })}
    </div>
  </div>
  );
}

export default App;


 // value add to the array so we can't use push use spred operator first take the todos each one and sperate passing with todo  like array of values to the list.
 // use map for array display like dynamically

// console
 //e.target.value = id : 56789003948,text : 'hey' status : false

//when click the checkbox we want to change this value e.target.value