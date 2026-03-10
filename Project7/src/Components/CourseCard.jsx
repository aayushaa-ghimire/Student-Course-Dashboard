import React from 'react'
// import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
// import Courses from '../Pages/Courses'
import '../Styles/CourseCard.css'
function CourseCard({course}) {
  return (
    <>
    <div className='Container'>
        <h3 className='Heading'>{course.name}</h3>
        <p>Level: {course.level}</p>
    </div>
    </>
  )
}

export default CourseCard