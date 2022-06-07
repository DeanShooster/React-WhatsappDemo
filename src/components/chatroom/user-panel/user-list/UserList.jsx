import './user-list.scss';

import User from './user/User';

const UserList = ( props ) => {

    return (
        <section className='user-list'>
            { props.data.map( (user,i)=> { return <User key={i} user={user}  selectUser={props.selectUser} />} ) }
        </section>
    )
}

export default UserList;