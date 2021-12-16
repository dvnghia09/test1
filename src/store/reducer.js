
import  { ADD_JOB, SET_JOB,DELETE_JOB,UPDATE_JOB } from './constants'

const initState = {
    todos : [],
    todoInput : ''
}

const reducer = (state,action) => {
    const newJob = [...state.todos]
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                todoInput : action.payload
            
        }
        case ADD_JOB:
            return {
                ...state,
                todos : [...state.todos,action.payload]
            }
        case DELETE_JOB:
            newJob.splice(action.payload,1)
            return {
                ...state,
                todos : newJob
            }    
        case UPDATE_JOB :
            newJob[action.payload.index] = action.payload.value
            return {
                ...state,
                todos : newJob
            }
    
        default:
            throw new Error('Invalid action')
    }
}

export default reducer 
export {initState}