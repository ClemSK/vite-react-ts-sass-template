import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Happy Hacking!</h1>
        <a href="https://github.com/typescript-cheatsheets/react">
          React-TS Cheatsheets
        </a>
        <a href="https://vitejs.dev/guide/">Vite Docs</a>
        <a href="https://vitest.dev/guide/">Vitest</a>
      </header>
    </div>
  );
}

export default App;
