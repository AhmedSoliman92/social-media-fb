import './online.css'

export default function Online({user}) {
  return (
    <li className="friend" key={user.id}>
        <div className="friend-img">
            <img src={user.profilePicture} alt="" className="profile-img" />
            <span className="online-sign"></span>
        </div>
        <span className="friend-name">{user.username}</span>
    </li>
  )
}
