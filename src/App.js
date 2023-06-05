// BrowserRouter component : wraps everywhere we wanna use the routers
// Routes : wraps all individual routes
// Route : to create single route
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages and components - ** Home must start with capital else shows not used and isnt displayed on webpage
import Home from './pages/Home';
import Navbar from './pages/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className="pages">
          <Routes>
            <Route
                // Defining props: the path and the element in it 
                path="/"
                element = {<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
