import PropTypes from 'prop-types';
import profile from './Profile.module.css'

export const Profile = ({ username, tag, location, avatar, stats: {followers, views, likes} }) => {
    return (<div className={profile.profile}>
        <div className={profile.description}>
    <img
      src={avatar}
      alt={avatar}
      className={profile.avatar}
    />
    <p className={profile.name}>{username}</p>
    <p className={profile.tag}>@{tag}</p>
            <p className={profile.location}>{location}</p>
  </div>

  <ul className={profile.stats}>
    <li>
      <span className={profile.label}>Followers</span>
      <span className={profile.quantity}>{followers}</span>
    </li>
    <li>
      <span className={profile.label}>Views</span>
      <span className={profile.quantity}>{views}</span>
    </li>
    <li>
      <span className={profile.label}>Likes</span>
      <span className={profile.quantity}>{likes}</span>
    </li>
  </ul>
</div>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    avatar:PropTypes.string.isRequired,
    stats:PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
}