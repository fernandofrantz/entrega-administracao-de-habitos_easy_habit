import logo from "./logo.svg";
import "./App.css";
import FormGoal from "./Components/FormGoal";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <FormGoal idGroup={22} idGoal={29} type={"edit"} />
      </header>
    </div>
  );
}

export default App;
