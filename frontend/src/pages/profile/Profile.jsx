import './profile.css'
import TopBar from '../../components/topBar/TopBar';
import SideBar from '../../components/sideBar/SideBar';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightBar/RightBar';
import { useState,useEffect,useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext'

const Profile = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user,setUser]= useState({});
    const username = useParams().username;
    useEffect(()=>{
        const fetchUser = async()=>{
            const res = await axios.get(`users/?username=${username}`);
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
                        <img src={PF+user.coverPicture && user.coverPicture!== '' ? PF+user.coverPicture: PF+"unknown.jpg" } alt="" className="profile-cover-img" />
                        <img src={PF+user.profilePicture && user.profilePicture!== ''? PF+user.profilePicture: PF+"unknown.jpg" } alt="" className="profile-user-img" />
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
