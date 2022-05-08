import TopBar from '../../components/topBar/TopBar';
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightBar/RightBar'
import SideBar from '../../components/sideBar/SideBar'
import './home.css'
export default function Home() {
  return (
    <>
      <TopBar/>
      <div className="home-container">
        <SideBar/>
        <Feed/>
        <RightBar/>
      </div>
    </>
  )
}


