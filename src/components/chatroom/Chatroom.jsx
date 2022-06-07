import { useState } from 'react';

import './chatroom.scss';

import UserPanel from './user-panel/UserPanel';
import ChatPanel from './chat-panel/ChatPanel';

const Chatroom = () =>{

    const dummyData = [
        { name: 'David', messages: [{from: 'David', message: 'How are you?', time: '11:12 am'}, { from: 'Me', message:'I am great! you are?', time: '11:15 am'}, {from: 'David', message: 'Good. I will be late today because of work!' , time: '11:20 am'}] },
        { name: 'Keren', messages: [{from: 'Me', message:'Do not forget to call me back :)', time: '13:17 pm'},{from: 'Me',message:'I will be around 9PM', time: '13:43 pm'},{from: 'Keren',message: 'See you soon. I will call you back shortly!', time: '13:54 pm'}]},
        { name: 'Mark', messages: [{from: 'Mark', message:'This is mark from work, We will begin shortly the ongoing project for react.', time: '14:17 pm'},{from: 'Mark', message: 'We will need to upkeep some old features and update some new ones. Be prepared tomorrow with your old project.', time: '14:18 pm'}, {from: 'Me', message:'Do not worry I did not forget.', time: '14:42 pm'}] },
        { name: 'Mor', messages: [ {from: 'Mor', message: 'Help me with React.', time: '18:12 pm'}, {from: 'Me', message:'No', time: '19:30 pm'},{from: 'Mor', message: 'Why sensei?', time: '19:01 pm'},{from: 'Me', message: 'I do not help to filthy casuals!', time: '20:01 pm'} ]},
        { name: 'Steel', messages: [{from: 'Steel', message: 'Woof Woof', time: '21:30 pm'}, {from: 'Me', message:'Crazy dog...' , time: '22:42 pm'}]},
        { name: 'Guy', messages: [{from:'Guy',message:'Did you know that...', time: '7:12 am'}, {from:'Me',message:'BLOCK', time: '7:13 am'}]}
    ]

    const [data,setData] = useState(dummyData);
    const [selectedUser,setSelectedUser] = useState(dummyData[0]);
    const [newMsg,setNewMsg] = useState(false);

    const SelectUserHandler = ( name ) =>{
        const selectedUser = data.filter( user=> user.name === name );
        setSelectedUser(selectedUser[0]);
    }

    const SendMessageHandler = ( message, name ) => {
        if( message === '' ) return;
        const selectedUser = data.filter( user=> user.name === name );
        selectedUser[0].messages.push( {from: 'Me', message,time:'16:10 pm'} );
        for(let i = 0; i < data.length; i++)
            if( data[i].user === name ){
                data[i] = selectedUser[0]; break;
            }
        setData( data ); setNewMsg(!newMsg);
    }

    return (
        <section className='chatroom-container'>
            <UserPanel data={data} selectUser={SelectUserHandler}/>
            <ChatPanel selectedUser={selectedUser} sendMsg={SendMessageHandler} newMsg={newMsg}/>
        </section>
    );
};

export default Chatroom;