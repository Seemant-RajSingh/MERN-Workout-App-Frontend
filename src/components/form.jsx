import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const Workoutform = () => {


    const {dispatch} = useWorkoutsContext()
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)




    // IMP*** ---> use async when reaching out to api
    const handleSubmit = async (e) => {
        //** stopping page from refreshing once form is submitted
        e.preventDefault()

        // data not sent via value in form but by making this workout object and passing the states entered
        const workout = {title, load, reps}

        //where the post request will be sent (first arg of fetch till before comma)
        const response = await fetch('/api/workouts', {
            //specify method of post
            method: 'POST',
            //cant send workout as object(what it is), hence converting it to json string
            // ** workout object is used as the data to be sent in the request body. By including the title, load, and reps properties from the workout object, the server receiving the request can access these values and handle them accordingly.
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        }) 

        // storing response in variable named json data (here entered workout details in form)
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null)
            setTitle('')
            setLoad('')
            setReps('')
            console.log('new workout added', json)
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }


    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Workout</h3>

            {/* changing useState and setting it as new value in input box */}
            <label>Exercise title:</label>
            <input 
            type="text"
            // value will show whats inside the textbox
            onChange={(e) => setTitle(e.target.value)}
            value={title} />

            <label>Load (kg):</label>
            <input 
            type="text"
            onChange={(e) => setLoad(e.target.value)}
            value={load} />

            <label>Reps:</label>
            <input 
            type="text"
            onChange={(e) => setReps(e.target.value)}
            value={reps} />

            <button>Add workout</button>
        </form>
    )
}

export default Workoutform