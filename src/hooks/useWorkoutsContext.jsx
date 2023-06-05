import { WorkoutsContext } from "../context/WorkoutContext"
import { useContext } from "react"

// ** CONCEPT: CUSTOM HOOK - useWorkoutContext is the hook

export const useWorkoutsContext = () => {
  // useContext hook takes the WorkoutsContext object as an argument and returns its current value
  // useContext only uses single context as i/p parameter
  const context = useContext(WorkoutsContext)

  // if empty
  if(!context) {
    throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
  }

  return context
}

