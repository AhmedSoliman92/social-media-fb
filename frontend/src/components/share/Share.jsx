import './share.css'
import {PermMedia, Tag, Room, EmojiEmotions} from '@mui/icons-material'
import { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
export default function Share() {
    const {user} = useContext(AuthContext);
    const [files, setFiles] = useState([])
    const [image,setImage]=useState([])
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const description= useRef();
    const handleSubmit =async(e)=>{
        e.preventDefault()
        const forms = new FormData();
        try {
            const newPost = {
                userId: user._id,
                desc: description.current.value,
                image:image
            }

            for(let i=0;i<files.length;i++){
                
                let fileName = Date.now() + files[i].name;
                forms.append("name", fileName);
                forms.append("file", files[i]);
                setImage(image[i]=fileName.replaceAll(/\s/g,''))
            }
            
            await axios.post('/upload',forms)
            await axios.post('/posts/create',newPost);
            window.location.reload();
        } catch (err) {
            console.log(err)
        }
    }
  return (
    <div className='shared' >
        <div className="shared-wrapper">
            <div className="shared-top">
                <img src={user.profilePicture? PF+ user.profilePicture: `${PF}unknown.jpg`} alt="profile" className="share-profile-img" />
                <input placeholder='What is in your mind?' className="share-input" ref={description}/>
            </div>
            <hr className="shared-hr" />
            <form className="shared-bottom" onSubmit={handleSubmit}>
                    <div className="shared-options">
                        <label htmlFor='file' className="shared-option">
                            <PermMedia htmlColor='Tomato' className="shared-icon" />
                            <span className='shared-option-text' >Photo or Video</span>
                            <input type="file" style={{display:"none"}} id="file" accept='.jpg, .png, .jpeg' onChange={e=> setFiles(e.target.files)} multiple />
                        </label>
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
                    <button className="shared-btn" type='submit'>Share</button>
            </form>
            
        </div>
        
    </div>
  )
}
