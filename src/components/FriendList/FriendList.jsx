import PropTypes from 'prop-types'
import s from '../FriendList/FriendList.module.css'

function FriendList({friends}) {
    return (
        <ul className={s.friend_list}>
            {friends.map(({ avatar, name, isOnline }) => (
                <li className={s.item}>
                    <span className={
                        isOnline ? `${s.status} ${s.online}` : `${s.status} ${s.offline}`}
                        ></span>
                    <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={s.name}>{name}</p>
                </li>
            ))}
        </ul>
    );
}
    FriendList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    }

export default FriendList;

// avatar - посилання на аватар
// name - ім'я друга
// isOnline - буль, що сигналізує про стан друга: в мережі або ні.