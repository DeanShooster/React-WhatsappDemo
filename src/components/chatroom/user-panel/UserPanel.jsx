import './user-panel.scss';

import Profile from './profile/Profile';
import Notification from './notification/Notification';
import Search from './search/Search';
import UserList from './user-list/UserList';

const UserPanel = ( props ) => {
    return (
        <div className='user-panel'>
            <Profile/>
            <Notification />
            <Search />
            <UserList data={props.data} selectUser={props.selectUser}/>
        </div>
    )
}

export default UserPanel;