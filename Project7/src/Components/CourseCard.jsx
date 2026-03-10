import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Courses from '../Pages/Courses'
import '../Styles/CourseCard.css'
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
                <Route path='/courses' element={Courses}></Route>
            </Routes>
        </Router>

    </div>
    </>
  )
}

export default CourseCard