import './post.css'
import {MoreHoriz} from '@mui/icons-material'
import { useState,useEffect, useContext } from 'react';
import axios from 'axios';
import {AuthContext} from '../../context/AuthContext';
import {format} from 'timeago.js'
const Post = ({post}) => {
    const {user:currentUser} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user,setUser]= useState({});
    const [isLiked, setIsLiked] = useState(false);
    const [like,setLike] = useState(post.likes.length);
    const [love,setLove] = useState(post.loves.length)
    const [isLoved,setIsLoved] = useState(false);
    const handleLike = async()=>{
        await axios.put(`/posts/${post._id}/like`,{userId:currentUser._id,reaction:'like'});
        setIsLiked(!isLiked);
        //setIsLoved(isLoved? !isLoved && setLove(love-1): isLoved)
        if(isLoved){
            setIsLoved(isLoved? !isLoved: isLoved);
            setLove(love-1);
        }
        setLike(isLiked? like -1: like+1)
    }
    const handleLove = async()=>{
        await axios.put(`/posts/${post._id}/like`,{userId:currentUser._id,reaction:'love'});
        setIsLoved(!isLoved);
        if(isLiked){
            setIsLiked(isLiked? !isLiked: isLiked);
            setLike(like-1);
        }
        //setIsLiked(isLiked? !isLiked && setLike(like-1): isLiked)
        setLove(isLoved? love - 1 : love + 1);
    }
    useEffect(()=>{
        setIsLoved(post.loves.includes(currentUser._id));
    },[post.loves,currentUser._id])
    useEffect(()=>{
            setIsLiked(post.likes.includes(currentUser._id));
    },[post.likes,currentUser._id])
    useEffect(()=>{
        const fetchUser = async()=>{
            const res = await axios.get(`users/?userId=${post.userId}`);
            setUser(res.data);
            
        };
        fetchUser();
    },[post.userId])
    return (
        <div className='post' >
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img src={user.profilePicture? PF+ user.profilePicture: `${PF}unknown.jpg`} alt="" className="post-profile-img" />
                        <span className="post-username">{user.username}</span>
                        <span className="post-date">{format(post.createdAt)}</span>
                    </div>
                    <div className="post-top-right">
                        <MoreHoriz/>
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-text"> {post?.desc}</span>
                    <img src={ `${PF}unknown.jpg`} alt="" className="post-img" />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img src={`${PF}like.png`} alt="" className="like-btn" onClick={handleLike} />
                        <img src={`${PF}heart.png`}alt="" className="like-btn" onClick={handleLove} />
                        <span className="post-like-counter">{like+love} people like it</span>
                    </div>
                    <div className="post-bottom-right">
                        <span className="post-comment-text"> comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
