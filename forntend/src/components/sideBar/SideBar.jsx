import './sideBar.css'
import CloseFriend from '../closeFriend/CloseFriend'
import { Users } from '../../data'
import {Feed,Chat, SlowMotionVideo,Groups, Bookmarks,HelpOutline,WorkOutline, Event, School} from  '@mui/icons-material'
export default function SideBar() {
  return (
    <div className="side-bar" >
      <div className="side-bar-wrapper">
        <ul className="side-bar-list">
          <li className="side-bar-list-item">
            <Feed className="side-bar-icon" />
            <span className="side-bar-list-text">Feed</span>
          </li>
          <li className="side-bar-list-item">
            <Chat className="side-bar-icon" />
            <span className="side-bar-list-text">Chat</span>
          </li>
          <li className="side-bar-list-item">
            <SlowMotionVideo className="side-bar-icon" />
            <span className="side-bar-list-text">Videos</span>
          </li>
          <li className="side-bar-list-item">
            <Groups className="side-bar-icon" />
            <span className="side-bar-list-text">Groups</span>
          </li>
          <li className="side-bar-list-item">
            <Bookmarks className="side-bar-icon" />
            <span className="side-bar-list-text">Bookmarks</span>
          </li>
          <li className="side-bar-list-item">
            <HelpOutline className="side-bar-icon" />
            <span className="side-bar-list-text">Questions</span>
          </li>
          <li className="side-bar-list-item">
            <WorkOutline className="side-bar-icon" />
            <span className="side-bar-list-text">Jobs</span>
          </li>
          <li className="side-bar-list-item">
            <Event className="side-bar-icon" />
            <span className="side-bar-list-text">Events</span>
          </li>
          <li className="side-bar-list-item">
            <School className="side-bar-icon" />
            <span className="side-bar-list-text">Courses</span>
          </li>
        </ul>
        <button className="side-bar-btn">Show More</button>
        <hr className="side-bar-hr" />
        <ul className="side-bar-friend-list">
          {
            Users.map(u=>
              <CloseFriend key={u.id} user={u} />)
          }
         
        </ul>
      </div>
    </div>
  )
}
