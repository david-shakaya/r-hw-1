import Container from "../Container/Container";
import s from "./Profile.module.scss";
import PropTypes from "prop-types";

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <Container>
      <div className={s.profile_section}>
        <div className={s.profile}>
          <div className="description">
            <img
              src={avatar}
              alt="Аватар пользователя"
              className={s.avatar}
              width="200px"
            />
            <p className="name">{name}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
          </div>

          <ul className="stats">
            <li>
              <span className="label">Followers </span>
              <span className="quantity">{stats.followers}</span>
            </li>
            <li>
              <span className="label">Views</span>
              <span className="quantity">{stats.views}</span>
            </li>
            <li>
              <span className="label">Likes</span>
              <span className="quantity">{stats.likes}</span>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Profile;

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
