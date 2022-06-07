import './chat-profile.scss';
import {CgProfile} from 'react-icons/cg';
import {HiOutlineSearch,HiOutlineDotsVertical} from 'react-icons/hi';

const ChatProfile = ( {name} ) => {
    return (
        <div className='chat-profile'>
            <CgProfile className='profile-picture'/>
            <div className='user-chat-info'>
                <p className='user-name'>{name}</p>
                <p className='user-sub-title'>click here for contact info</p>
            </div>
            <div className='chat-control'>
                <HiOutlineSearch />
                <HiOutlineDotsVertical />
            </div>
        </div>
    )
}

export default ChatProfile;