import { createContext, useReducer } from 'react'

//using createContext() function and exporting it so other components may access it (React.createContext() is another observed way of exporting but may be using different imports)
export const WorkoutsContext = createContext()


//action = data parameters sent from dispatch function
export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return { 
        //action.payload is the array of all workouts? 
        workouts: action.payload  //action.payload = json data(here list of all workouts stored in database) recieved from fetch in Home 
      }
    case 'CREATE_WORKOUT':
      return { 
        // adding new element action.payload = json data(here entered workout details in form) recieved from fetch to the array workouts 
        workouts: [action.payload, ...state.workouts] //.workouts => make element workouts of state an array
      }
    case 'DELETE_WORKOUT':
      return { 
        workouts: state.workouts.filter(w => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const WorkoutContextProvider = ({ children }) => {
    //using useReducer hook defining initial value of state(var name, can change) and workoutReducer - a function called by dispatch(specifies condition which tells which switch case will be executed) 
  const [state, dispatch] = useReducer  (workoutsReducer, { 
    workouts: null
  })
  
  return (
    //basically providing value(attribute specified below - here: ...state, dispatch function) to wrapped elements, kind of like global state
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
    {/* WorkoutsContext wraps all children, i.e., the App and hence all its components in index.js file which is essentially the whole app ... and provides the value specified to all components within it */}
      { children }
    </WorkoutsContext.Provider>
  )
}




