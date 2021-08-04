import Container from "../Container/Container";
import FriendListItem from "../FriendListItem/FriendListItem";
import PropTypes from "prop-types";

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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
