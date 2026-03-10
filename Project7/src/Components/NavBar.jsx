import {Link} from 'react-router-dom';
import Courses from '../Pages/Courses';
import Home from '../Pages/Home';
import '../Styles/nav.css'
// import styles from 'C:/React/project7/Project7/src/Styles/Navbar.module.css'
function NavBar() {
  return (
    <>
    <div>
        <ul>
            <nav style={{display: 'flex',
                 gap: '3vw', 
                 listStyleType: 'none', 
                 fontSize: '2vw',
              
                 }}>
                <li ><Link className= "Nav"  to={"/"}>Home</Link></li>
                <li><Link  className= "Nav"  to={"/courses"}>Courses</Link></li>
                
            </nav>
        </ul>
    </div>
        {/* <Routes> */}
            {/* <Route path='/' element={Home}></Route>
            <Route path='/courses' element={Courses}></Route> */}
        {/* </Routes> */}
    </>
  );
}

export default NavBar