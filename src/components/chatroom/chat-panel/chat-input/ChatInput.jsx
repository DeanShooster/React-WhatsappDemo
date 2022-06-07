import './chat-input.scss';
import {CgSmileMouthOpen} from 'react-icons/cg';
import {ImAttachment} from 'react-icons/im';
import {HiMicrophone} from 'react-icons/hi';

const ChatInput = ( {sendMsg,name} ) => {

    const MessageInputHandler = (event) =>{
        event.preventDefault();
        sendMsg( event.target[0].value,name);
        event.target.reset();
    }

    return (
        <div className='chat-input'>
            <div className='input-emoji-attach'>
                <CgSmileMouthOpen className='emoji-attach-hover'/>
                <ImAttachment className='emoji-attach-hover'/>
            </div>
            <form onSubmit={MessageInputHandler}>
                <input placeholder='Type a message'/>
            </form>
            <HiMicrophone className='emoji-attach-hover'/>
        </div>
    )
}

export default ChatInput;