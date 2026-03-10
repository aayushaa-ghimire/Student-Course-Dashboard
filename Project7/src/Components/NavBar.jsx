import React from 'react'
import {BrowseRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Courses from '../Pages/Courses';
import Home from '../Pages/Home';
function NavBar() {
  return (
    <>
    <Router>
        <ul>
            <nav>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/courses"}>Courses</Link></li>
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