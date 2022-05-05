import './post.css'
import {MoreHoriz} from '@mui/icons-material'
import { Users } from '../../data'
const Post = ({post}) => {
    console.log(Users.filter(u=> u.id ===post.userId).profilePicture)
    return (
        <div className='post' >
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img src={Users.filter(u=> u.id ===post.userId)[0].profilePicture} alt="" className="post-profile-img" />
                        <span className="post-username">{Users.filter(u => u.id=== post.userId)[0].username}</span>
                        <span className="post-date">{post.date}</span>
                    </div>
                    <div className="post-top-right">
                        <MoreHoriz/>
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-text"> {post?.desc}</span>
                    <img src={post.photo} alt="" className="post-img" />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img src="/assets/like.png" alt="" className="like-btn" />
                        <img src="/assets/heart.png" alt="" className="like-btn" />
                        <span className="post-like-counter">{post.like} people like it</span>
                    </div>
                    <div className="post-bottom-right">
                        <span className="post-comment-text"> {post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
