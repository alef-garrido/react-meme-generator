import logo from './logo.svg';
import './App.css';
import Page from './components/page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Made with React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Gurl!
        </a>
      </header>
      <Page />
    </div>
  );
}

export default App;
