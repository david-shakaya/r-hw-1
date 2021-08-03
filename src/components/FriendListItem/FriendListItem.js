import s from "./FriendListItem.module.scss";

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

export default FriendListItem;
