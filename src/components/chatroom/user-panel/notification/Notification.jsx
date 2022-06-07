import './notification.scss';
import {FaBellSlash} from 'react-icons/fa';
import {IoIosArrowForward} from 'react-icons/io';

const Notification = () => {
    return (
        <div className='notifcation-container'>
            <FaBellSlash className='bell'/>
            <div>
                <p className='title'>Get notified of new messages</p>
                <p>Turn on desktop notifications <IoIosArrowForward className='arrow'/></p>
            </div>
        </div>
    )
}

export default Notification;