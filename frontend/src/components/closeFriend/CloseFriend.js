import './closeFriend.css'
export default function CloseFriend({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="side-bar-friend">
        <img src={PF+user.profilePicture? PF+user.profilePicture : `${PF}/unknown.jpg`} alt="profile" className="side-bar-friend-img" />
        <span className="side-bar-friend-name">{user.username}</span>
    </li>
  )
}
