import React from 'react';
import {BrowserRouter as Route, Router, Routes, Link} from 'react-router-dom';
import Courses from '../Pages/Courses';


function Home() {
  return (
    <>
    <div>
        <h1>Welcome to the Home Page</h1>
        <Router>
          <ul>
            <li><Link to={'/courses'}></Link></li>
          </ul>

          <Routes>
             <Route path='/courses' Component={Courses}></Route>
          </Routes>
        </Router>
    </div>
    </>
  )
}

export default Home