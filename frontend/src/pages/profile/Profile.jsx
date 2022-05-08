import './profile.css'
import TopBar from '../../components/topBar/TopBar';
import SideBar from '../../components/sideBar/SideBar';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightBar/RightBar';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const [user,setUser]= useState({});
    const username = useParams().username;
    useEffect(()=>{
        const fetchUser = async()=>{
            const res = await axios.get(`users/?username=${username}`);
            console.log(res.data)
            setUser(res.data);
        };
        fetchUser();
    },[username]) 
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
                        <h4 className="profile-info-name">{user.username}</h4>
                        <span className="profile-info-desc">{user.desc}</span>
                    </div>
                </div>
                <div className="profile-right-bottom">
                    <Feed username={user._id}/>
                    <RightBar user={user}/>
                </div>
            </div> 
        </div>
    </>
    );
}

export default Profile;
