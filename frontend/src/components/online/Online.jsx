import './online.css'

export default function Online({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="friend" key={user.id}>
        <div className="friend-img">
            <img src={PF+user.profilePicture} alt="" className="profile-img" />
            <span className="online-sign"></span>
        </div>
        <span className="friend-name">{user.username}</span>
    </li>
  )
}
