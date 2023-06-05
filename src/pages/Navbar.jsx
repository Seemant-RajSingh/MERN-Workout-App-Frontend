import { Link } from "react-router-dom"
// react router dom for making link


const Navbar = () => {

    return (
        <header>
                <div className="container">
                    {/* Link is used if we r changing page on the same website while anchor tag may be used for moving to another website as in constant href*/}
                    <Link to='/'>
                        <h1>Workout Buddy</h1>
                    </Link>
                </div>
        </header>
    )
}

export default Navbar