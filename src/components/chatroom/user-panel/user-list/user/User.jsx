import './user.scss';
import {CgProfile} from 'react-icons/cg';
import {MdKeyboardArrowDown} from 'react-icons/md';
import { useState } from 'react';

const User = ( {user,selectUser} ) => {

    const [onUserHover,setOnUserHover] = useState(false);
    const [messageLength,setMessageLength] = useState(34)

    const ReduceMessage = ( message) => {
        if( message.length >= messageLength - 5 )
            return '...';
    }

    const OnUserHoverHandler = () => {
        setOnUserHover(!onUserHover);
    }

    const SelectUser = () =>{
        selectUser( user.name );
    }

    window.addEventListener('resize', ()=>{
        if( window.innerWidth < 800 )
            setMessageLength(22);
        else
            setMessageLength(34);
    })

    return (
        <div className='user' onMouseEnter={OnUserHoverHandler} onMouseLeave={OnUserHoverHandler} onClick={SelectUser} >
            <CgProfile className='profile-picture'/>
            <div className='profile-container'>
                <p className='profile-name'>{user.name}</p>
                <p>{user.messages[user.messages.length-1].message.slice(0,messageLength)}{ReduceMessage(user.messages[user.messages.length-1].message)}</p>
            </div>
            <div className='time-stamp'>
                <p>{user.messages[user.messages.length-1].time}</p>
                {onUserHover ? <MdKeyboardArrowDown className='arrow-down'/> : null}
            </div>
        </div>
    )
}

export default User;