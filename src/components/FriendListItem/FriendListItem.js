const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li>
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="">{name}</p>
    </li>
  );
};

export default FriendListItem;
