import './topBar.css'
import {Chat, Notifications, Person, Search} from '@mui/icons-material'
export default function TopBar() {
  return (
    <div className="top-bar-container">
        <div className='top-bar-left'>
          <span className="logo">KnockMe</span>
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
            <img src="/assets/profileImg/1.jpg" alt="profile" className="top-bar-img" />

        </div>
    </div>
  );
}
