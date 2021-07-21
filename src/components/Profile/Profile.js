import Container from "../Container/Container";
import s from "./Profile.module.scss";

const Profile = ({ user }) => {
  return (
    <Container>
      <div className={s.profile_section}></div>
      <div className={s.profile}>
        <div className="description">
          <img
            src={user.avatar}
            alt="Аватар пользователя"
            className={s.avatar}
            width="200px"
          />
          <p className="name">{user.name}</p>
          <p className="tag">{user.tag}</p>
          <p className="location">{user.location}</p>
        </div>

        <ul className="stats">
          <li>
            <span className="label">Followers </span>
            <span className="quantity">{user.stats.followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">{user.stats.views}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">{user.stats.likes}</span>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Profile;
