import { useEffect } from 'react'

import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

//importing components
import Workoutdetails from '../components/Workoutdetails'

import Workoutform from '../components/form'


//returning html in js file as prop to main js file
const Home = () => {
    // importing workouts (array that stores all workouts) and dispatch function from context
    const { workouts, dispatch } = useWorkoutsContext()

    //useEffect fires a function when home is rendered, [] means the function will fire once even if home is rendered multiple times
    // wht call this function? - initially rendered, workouts might be empty or uninitialized. The useEffect function is triggered during the initial render to fetch the workout data from the server and update the workouts state using the dispatch function.
    useEffect(() => {
        const fetchWorkouts = async () => {
            //to fetch data and store it in response
            const response = await fetch('/api/workouts')
            
            //array of workout objects stored in json
            //response.json() parses the data response variable stores
            // this json has different response than json in form component - list of all workouts
            const json = await response.json()

            if(response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }
        
        // call fetchWorkouts each time dispatch function is called
        fetchWorkouts()
    }, [dispatch])


    return (
        <div className="home">
            <div className="workouts">
                {/* if workouts state(stores array) is not empty then show each elements of the array as in function (mapping function acts like a for loop that accesses each element - 'wrk' */}
                {workouts && workouts.map((wrk)=> (
                    //curly braces not used cause returning template else error - no workout shown/empty,
                    // workout is necessary and is passed to Workoutdetails to get its props(title, load, reps, created) else error
                    //key is assigning an id to each element one by one as iteration goes
                    <Workoutdetails workout={wrk} key={wrk._id}/>
                ))}
            </div>
            <Workoutform />
        </div>
    )
}

export default Home