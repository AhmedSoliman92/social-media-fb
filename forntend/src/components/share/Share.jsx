import './share.css'
import {PermMedia, Tag, Room, EmojiEmotions} from '@mui/icons-material'
export default function Share() {
  return (
    <div className='shared' >
        <div className="shared-wrapper">
            <div className="shared-top">
                <img src="/assets/profileImg/1.jpg" alt="profile" className="share-profile-img" />
                <input placeholder='What is in your mind?' className="share-input" />
            </div>
            <hr className="shared-hr" />
            <div className="shared-bottom">
                    <div className="shared-options">
                        <div className="shared-option">
                            <PermMedia htmlColor='Tomato' className="shared-icon" />
                            <span className='shared-option-text' >Photo or Video</span>
                        </div>
                        <div className="shared-option">
                            <Tag htmlColor='Blue' className="shared-icon" />
                            <span className='shared-option-text' >Tag</span>
                        </div>
                        <div className="shared-option">
                            <Room htmlColor='Green' className="shared-icon" />
                            <span className='shared-option-text' >Location</span>
                        </div>
                        <div className="shared-option">
                            <EmojiEmotions htmlColor='gold' className="shared-icon" />
                            <span className='shared-option-text' >Feelings</span>
                        </div>
                    </div>
                    <button className="shared-btn">Share</button>
            </div>
            
        </div>
        
    </div>
  )
}
