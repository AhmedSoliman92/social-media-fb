import './topBar.css'
import {Chat, Notifications, Person, Search} from '@mui/icons-material';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
export default function TopBar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user} = useContext(AuthContext);
  return (
    <div className="top-bar-container">
        <div className='top-bar-left'>
          <Link to='/' style={{textDecoration:"None"}}>
            <span className="logo">KnockMe</span>
          </Link>
        </div>
        <div className='top-bar-center'>
          <div className="search-bar">
            <Search className="search-icon" />
            <input placeholder='search...' className="search-input" />
          </div>
          
        </div>
        <div className='top-bar-right'>
          <div className="top-bar-links">
            <span className="top-bar-link">
              Home
            </span>
            <span className="top-bar-link">Timeline</span>
          </div>
          <div className="top-bar-icons">
              <div className="top-bar-icon-item">
                <Person/>
                <span className="top-icon-badge">1</span>
              </div>
            <div className="top-bar-icon-item">
              <Chat/>
              <span className="top-icon-badge">1</span>
            </div>

            <div className="top-bar-icon-item">
              <Notifications/>
              <span className="top-icon-badge">1</span>
            </div>
          </div>
            <Link to={`/${user.username}`}>
              <img src={user.profilePicture? PF+ user.profilePicture: `${PF}unknown.jpg`} alt="profile" className="top-bar-img" />
            </Link>

        </div>
    </div>
  );
}
