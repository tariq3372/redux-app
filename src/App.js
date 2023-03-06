import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from './redux/actions/test';

function App() {
  const [isLanguageEnglish, setIsLanguageEnglish] = useState(true)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData())
  }, [])
  const test = useSelector((state) => state?.test?.test);
  console.log("test", test)
  const handleChange = () => {
    setIsLanguageEnglish(!isLanguageEnglish)
    if(isLanguageEnglish) {
      const body = document.querySelector("body");
      body.setAttribute('direction', 'rtl')
    } else {
      const body = document.querySelector("body");
      body.setAttribute('direction', 'ltr')
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => handleChange()}>{isLanguageEnglish ? "AR" : "EN"}</button>
        <img src={logo} className="App-logo test" alt="logo" />
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
