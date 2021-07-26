import Container from "../Container/Container";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <section>
      <Container>
        <ul className="friends">
          {friends.map(({ avatar, id, name, isOnline }) => {
            return (
              <FriendListItem
                key={id}
                avatar={avatar}
                id={id}
                name={name}
                isOnline={isOnline}
              />
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default FriendList;
