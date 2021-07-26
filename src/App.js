// import "./App.css";
import user from "./data/user.json";
import statistics from "./data/statistical.json";
import friendList from "./data/friend-list.json";
import Container from "./components/Container/Container";
import Profile from "./components/Profile/Profile";
import StatisticsList from "./components/StatisticsList/StatisticsList";
import FriendList from "./components/FriendList/FriendList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <p>Тут у нас хедер</p>
        </Container>
      </header>
      <Profile
        name={user.name}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <StatisticsList list={statistics} />
      <FriendList friends={friendList} />
    </div>
  );
}

export default App;
