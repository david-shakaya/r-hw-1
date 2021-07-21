// import "./App.css";
import user from "./data/user.json";
import Container from "./components/Container/Container";
import Profile from "./components/Profile/Profile";

console.log(user);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <p>Тут у нас хедер</p>
        </Container>
      </header>
      <Profile user={user} />
    </div>
  );
}

export default App;
