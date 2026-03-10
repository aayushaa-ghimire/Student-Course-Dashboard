import './App.css'
import NavBar from './Components/NavBar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Courses from './Pages/Courses';
import Home from './Pages/Home'

function App() {

  return (
    <>
    
        
        <Router>
          <NavBar/>
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/courses" element={<Courses/>}  />

        </Routes>
      </Router>

    </>
  )
}

export default App
