
import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setstate] = useState({});

    //     componentDidMount() {
    //         this.dadJokes()
    //     }

    // dadJokes = () => {
    //     fetch('/api/dadjokes')
    //         .then(response => response.text())
    //         .then(message => {
    //             this.setState({message: message});
    //         });
    // };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/posts")
        const data = await response.json()
        setstate(data)
        console.log('success')
      } catch (err) {
        console.log("ERREUR")
      }
    }
    fetchData()
  }, [])
  console.log(state)
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="App-title">{state.uetr}</h3>
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
      </header>
    </div>
  );
}

export default App;
