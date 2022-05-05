import './rightBar.css'


import { Users } from '../../data'
import Online from '../online/Online'
export default function RightBar({profile}) {

  const HomeRightBar = ()=> {
    return(
      <>
        <div className="bday-container">
          <img src="/assets/gift.png" alt="" className="bday-img" />
          <span className="bday-text">
            <b>Rimy Alloush</b> and <b>1 other friend</b> have a birthday today
          </span>
        </div>
        <hr className="righ-bar-hr" />
        <div className="friend-suggest-container">
          <div className="friend-suggest-top">
            <span className="friend-suggest-title">Suggestions</span>
            <span className="friend-suggest-btn">See All</span>
          </div>
          <div className="friend-suggest-bottom">
            <div className="friend-suggest-bottom-left">
              <img src="/assets/profileImg/1.jpg" alt="" className="friend-suggest-img" />
            </div>
            <div className="friend-suggest-bottom-right">
                <span className="acount-name">Rima Alloush</span>
                <span className="common-friend">  followed by <b>Manar</b> and 5 others</span>
                <button className="follow-btn">Follow</button>
            </div>
          </div>
        
        </div>
        <hr className="righ-bar-hr" />


        <div className="online-friends">
            <h4 className="online-friend-title">Online Friend</h4>
            <ul className="online-friend-list">
              {Users.map((user)=>
                <Online key={user.id} user={user} />
              )}
            </ul>
        </div>
      </>
    )
  }

  const ProfileRightBar = ()=>{
    return(
      <>
        <h4 className="right-bar-title">User Info</h4>
        <div className="right-bar-info">
          <div className="right-bar-info-item">
            <span className="right-bar-info-key">From:</span>
            <span className="right-bar-info-value">Budapest</span>
          </div>
          <div className="right-bar-info-item">
            <span className="right-bar-info-key">Live:</span>
            <span className="right-bar-info-value">Budapest</span>
          </div>
          <div className="right-bar-info-item">
            <span className="right-bar-info-key">Relationship:</span>
            <span className="right-bar-info-value">Married</span>
          </div>
        </div>
        <h4 className="right-bar-title">My Friends</h4>
        <div className="right-bar-followings">
          <div className="right-bar-following">
            <img src="/assets/profileImg/ahmed.jpg" alt="" className="right-bar-following-img" />
            <span className="right-bar-following-name">Ahmed Soliman</span>
          </div>
          <div className="right-bar-following">
            <img src="/assets/profileImg/ahmed.jpg" alt="" className="right-bar-following-img" />
            <span className="right-bar-following-name">Ahmed </span>
          </div>
          <div className="right-bar-following">
            <img src="/assets/profileImg/ahmed.jpg" alt="" className="right-bar-following-img" />
            <span className="right-bar-following-name">Ahmed Soliman</span>
          </div>
        </div>

      </>
    )
  }
  return (
    <div className="right-bar" >
      <div className="right-wrapper">
        {profile ? <ProfileRightBar/> : <HomeRightBar/>}
      </div>
    </div>
  )
}
