import {BrowserRouter as Route, Router, Routes, Link} from 'react-router-dom';
import Courses from '../Pages/Courses';
import Home from '../Pages/Home';
function NavBar() {
  return (
    <>
    <Router>
        <ul>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/courses"}>Courses</Link>
            </nav>
        </ul>
        <Routes>
            <Route path='/' Component={Home}></Route>
            <Route path='/courses' Component={Courses}></Route>
        </Routes>
    </Router> 
    </>
  );
}

export default NavBar