import './message.scss';

const Message = ( {message}) => {



    return (
        <div className={message.from === 'Me' ? 'message self-msg' : 'message user-msg'}>
            <p>{message.message}</p>
            <p className='msg-time'>{message.time}</p>
        </div>
    )
}

export default Message;