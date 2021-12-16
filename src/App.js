import { useStore,actions } from './store'
import { useRef,useState } from 'react'

function App() {
  const [state,dispatch] = useStore()
  const {todos,todoInput} = state
  const [edit,setEdit] = useState(false)
  const [editIndex,setEditIndex] = useState(0)


  const handleAddJob = () => {
    dispatch(actions.addJob(todoInput))
    dispatch(actions.setJob(''))

    focusInput.current.focus()
  }

  const handleEdit = (job,index) => {
    setEdit(!edit)
    dispatch(actions.setJob(job))
    setEditIndex(index)
    focusInput.current.focus()

  }

  const handleSave = () => {
    setEdit(!edit)
    dispatch(actions.updateJob({
      index : editIndex,
      value : todoInput
    }))

    dispatch(actions.setJob(''))
    focusInput.current.focus()
    
  }


  const focusInput = useRef()
  console.log(state)
  
  return (
    <div className="App">
      <h1>Todo list From Context and Reducer</h1>
      <input
      ref= {focusInput}
        value={state.todoInput}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(actions.setJob(e.target.value))
        }}
      />
      {edit ? <button
        onClick={handleSave}
      >Save</button> 
      : 
      <button
      onClick={handleAddJob}
      >Add Job</button> }
      
      <ul>
          {
            todos.map((job,index) => {
              return <li key={index}>
                {job}

                <button 
                onClick={() => {
                  handleEdit(job,index)
                }}
                style={{marginLeft:30}}>
                Edit
                </button>

                <span 
                onClick={() => {
                  dispatch(actions.deleteJob(index))
                }}
                style={{paddingLeft:30}}>X</span>
              </li>
            } )
          }
        </ul> 
    </div>
  );
}

export default App;
