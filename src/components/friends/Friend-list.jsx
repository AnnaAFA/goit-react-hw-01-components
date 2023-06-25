import PropTypes from 'prop-types';
import style from './Friends.module.css'
import {FriendListItem} from './Friend-list-item'

export const FriendList = ({ friends }) => {
    return (
        <ul className={style.list}>
            {friends.map(friend => (
                <li className={style.item} key={friend.id}>
                    <FriendListItem
               id={friend.id}
               isOnline={friend.isOnline}
               avatar={friend.avatar}
               name={friend.name}
             />
                    
                </li>
            ))}
        </ul>)
        
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
          })
    ).isRequired
}