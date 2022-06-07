import './profile.scss';
import {FaUserCircle} from 'react-icons/fa';
import {BsFillChatLeftTextFill} from 'react-icons/bs';
import {BiDotsVerticalRounded} from 'react-icons/bi';
import {TbCircleDashed} from 'react-icons/tb';

const Profile = () => {
    return (
        <div className='profile'>
            <FaUserCircle className='picture'/>
            <div className='nav-icons'>
                <TbCircleDashed className='icon'/>
                <BsFillChatLeftTextFill className='icon'/>
                <BiDotsVerticalRounded className='icon'/>
            </div>
        </div>
    )
}

export default Profile;