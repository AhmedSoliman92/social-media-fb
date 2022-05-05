import './closeFriend.css'

export default function CloseFriend({user}) {
  return (
    <li className="side-bar-friend">
        <img src={user.profilePicture} alt="profile" className="side-bar-friend-img" />
        <span className="side-bar-friend-name">{user.username}</span>
    </li>
  )
}
