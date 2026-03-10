import React from 'react'
import { useState } from 'react'

function Courses() {
  const[courses, setCourses] = useState([
    {id:1, courseName: 'Course 1', level:'Beginner'},
    {id:2, courseName: 'Course 2', level: 'Intermediate'},
    {id:3, courseName: 'Course 3', level: 'Advanced'}
  ]);
  return (
    <>
    <div>
        <h1>Courses:</h1>
    </div>
    </>
  )
}

export default Courses