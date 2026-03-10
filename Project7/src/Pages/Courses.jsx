import { useState } from 'react'
import CourseCard from '../Components/CourseCard';
// import styles from 'C:/React/project7/Project7/src/Styles/Course.css'

function Courses() {
  const[filter, setFilter] = useState(["All"]);

  const courses = ([{id:1, courseName: 'Course 1', level:'Beginner'},
    {id:2, courseName: 'Course 2', level: 'Intermediate'},
    {id:3, courseName: 'Course 3', level: 'Advanced'}
  ]);

  const filteredCourses = filter 
  === "All" 
  ?courses: 
  courses.filter(course=>course.level===filter)




  const btnStyles = {
    display: 'flex',
    padding: '2vw',
    gap: '2vw',
    fontWeight: 'bold',
    justifyContent: 'center',
    fontSize: '1.3em'
  }

  return (
    <>
    <div>
        <h1 style={{display: 'flex', justifyContent: 'center'}}>Courses:</h1>
        <div style={btnStyles}>
          <button onClick={()=>setFilter('All')} style={{padding: '1vw', fontWeight: 'bold', fontSize: '1.1em'}}>All</button>
          <button onClick={()=>setFilter('Intermediate')} style={{padding: '1vw', fontWeight: 'bold', fontSize: '1.1em'}} >Intermediate</button>
          <button onClick={()=>setFilter('Advanced')} style={{padding: '1vw', fontWeight: 'bold', fontSize: '1.1em'}}  >Advanced</button>
        </div>

        {filteredCourses.length === 0? 
          <h1>No Courses Found</h1>: 
          filteredCourses.map(course=> (<CourseCard key={course.id} course={course}/>))
        }
    </div>
    </>
  )
}

export default Courses