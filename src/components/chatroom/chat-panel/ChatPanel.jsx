import './chat-panel.scss';

import ChatProfile from './chat-profile/ChatProfile';
import ChatBody from './chat-body/ChatBody';
import ChatInput from './chat-input/ChatInput';

const ChatPanel = ( {selectedUser,sendMsg} ) => {

    return (
        <div className='chat-panel'>
            <ChatProfile name={selectedUser.name}/>
            <ChatBody messages={selectedUser.messages}/>
            <ChatInput sendMsg={sendMsg} name={selectedUser.name}/>
        </div>
    )
}

export default ChatPanel;