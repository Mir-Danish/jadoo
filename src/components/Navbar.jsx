
import {Link} from 'react-router-dom';
import "../components/style.css";


const Navbar = () => {
  return (
    <nav className="navbar">
        <div>
           {/* <img src='https://cdn.pixabay.com/photo/2016/03/17/07/02/starbucks-1262392_640.jpg' alt='' className='logoimage' />  */}
              <h1 className='logo'>Jadoo</h1>
        </div>
        <div className="navbar-links">
      <Link to="/">Home</Link>
      <Link to="/About">Destination</Link>
      <Link to="/Contact">Hotels</Link>
      <Link to="/Contact">Flights</Link>
      <Link to="/Contact">Booking</Link>
      <Link to="/Contact">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;

 