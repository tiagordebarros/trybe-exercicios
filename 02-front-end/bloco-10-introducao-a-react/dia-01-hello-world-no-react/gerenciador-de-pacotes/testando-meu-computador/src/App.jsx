import logo from './logo.svg';
import './App.css';

const textJSX = "Hello, JSX";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Hello, World!</code>.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>{textJSX}</h1>
        </a>
      </header>
    </div>
  );
}

export default App;
