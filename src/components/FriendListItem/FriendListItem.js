import s from "./FriendListItem.module.scss";
import PropTypes from "prop-types";

const FriendListItem = ({ isOnline, avatar, name }) => {
  const spanClass = isOnline ? s.red : s.blue;
  return (
    <li className={s.item}>
      <span className={spanClass}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
