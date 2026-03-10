import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Courses from '../Pages/Courses'
function CourseCard({course}) {
  return (
    <>
    <div>
        <h3>{course.name}</h3>
        <p>Level: {course.level}</p>
        <Router>
            <ul>
                <li><Link to="/courses"> </Link></li>
            </ul>

            <Routes>
                <Route path='/courses' Component={Courses}></Route>
            </Routes>
        </Router>

    </div>
    </>
  )
}

export default CourseCard