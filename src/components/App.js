import React,{useReducer} from "react"
import reducer from './TaskReducer'
import '../styles/App.css';
const App = () => {
  const [taskState, dispatch] = useReducer(reducer,{count : 0})
  return (
    <div id="main">
      <h2>Task Counter</h2>
      <button onClick={() => dispatch({type: 'add'})} id="addTaskBtn">Add a task</button>
      <button onClick={() => dispatch({type: 'delete'})}  id="delTaskBtn">Delete a task</button>
      <button onClick={() => dispatch({type: 'deleteAll'})}  id="delAllTaskBtn">Delete all tasks</button>
      <h3 className="counter">Number of Tasks : {taskState.count}</h3>
    </div>
  )
}


export default App;