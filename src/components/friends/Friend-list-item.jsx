// import PropTypes from 'prop-types';
import style from './Friends.module.css'


export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <>
            <span className={`${style.status} ${style[isOnline]}`}>{isOnline}</span>
            <img className={style.avatar} src={avatar} alt={name} width="48" />
            <p className={style.name}>{name}</p>
        </>
    )
}

