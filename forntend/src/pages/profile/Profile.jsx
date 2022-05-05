import './profile.css'
import TopBar from '../../components/topBar/TopBar';
import SideBar from '../../components/sideBar/SideBar';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightBar/RightBar';


const Profile = () => {
    return (
    <>
        <TopBar/>
        <div className="profile">
            <SideBar/>
            <div className="profile-right">
                <div className="profile-right-top">
                    <div className="profile-cover">
                        <img src="/assets/profileImg/1.jpg" alt="" className="profile-cover-img" />
                        <img src="/assets/profileImg/ahmed.jpg" alt="" className="profile-user-img" />
                    </div>
                    <div className="profile-info">
                        <h4 className="profile-info-name">Ahmed Soliman</h4>
                        <span className="profile-info-desc">Ahmed Soliman</span>
                    </div>
                </div>
                <div className="profile-right-bottom">
                    <Feed/>
                    <RightBar/>
                </div>
            </div> 
        </div>
    </>
    );
}

export default Profile;
