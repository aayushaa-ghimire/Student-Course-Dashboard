import { useState } from 'react'
import CourseCard from '../Components/CourseCard';

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

  return (
    <>
    <div>
        <h1>Courses:</h1>
        <div>
          <button onClick={()=>setFilter('All')}>All</button>
          <button onClick={()=>setFilter('Intermediate')}>All</button>
          <button onClick={()=>setFilter('Advanced')}>All</button>
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