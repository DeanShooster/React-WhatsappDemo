import './chat-body.scss';

import Message from './message/Message';

const ChatBody = ( {messages} ) => {

    return (
        <div className='chat-body'>
            { messages.map( (message,i)=> { return <Message key={i}  message={message}/> } ) }
        </div>
    )
}

export default ChatBody;