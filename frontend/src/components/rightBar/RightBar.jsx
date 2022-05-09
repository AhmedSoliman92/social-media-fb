import './rightBar.css'

import Online from '../online/Online'
export default function RightBar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightBar = ()=> {
    
    return(
      <>
        <div className="bday-container">
          <img src={PF+"gift.png"} alt="" className="bday-img" />
          <span className="bday-text">
            <b>Rimy Alloush</b> and <b>1 other friend</b> have a birthday today
          </span>
        </div>
        <hr className="righ-bar-hr" />
        {/* <div className="friend-suggest-container">
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
        
        </div> */}
        <hr className="righ-bar-hr" />


        <div className="online-friends">
            <h4 className="online-friend-title">Online Friend</h4>
            {/* <ul className="online-friend-list">
              {user.following.map((u)=>
                <Online key={u.id} user={u} />
              )}
            </ul> */}
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
            <span className="right-bar-info-value">{user.city}</span>
          </div>
          <div className="right-bar-info-item">
            <span className="right-bar-info-key">Live:</span>
            <span className="right-bar-info-value">{user.city}</span>
          </div>
          <div className="right-bar-info-item">
            <span className="right-bar-info-key">Relationship:</span>
            <span className="right-bar-info-value">
              {user.relationship==='1'? 'Single' : user.relationship==='2'? 'Maried': '-' }
            </span>
          </div>
        </div>
        <h4 className="right-bar-title">My Friends</h4>
        <div className="right-bar-followings">
          <div className="right-bar-following">
            <img src={PF+"unknown.jpg"} alt="" className="right-bar-following-img" />
            <span className="right-bar-following-name">Ahmed Soliman</span>
          </div>
        </div>

      </>
    )
  }
  return (
    <div className="right-bar" >
      <div className="right-wrapper">
        {user ? <ProfileRightBar/> : <HomeRightBar/>}
      </div>
    </div>
  )
}
