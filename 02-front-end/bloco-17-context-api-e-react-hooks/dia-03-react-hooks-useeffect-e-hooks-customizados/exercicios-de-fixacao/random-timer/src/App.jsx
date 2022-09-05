import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [random, setRandom] = useState();
  const randomNumber = () => {
    const randomic = (100 * Math.random()).toFixed(0);
    setRandom(randomic);
  }
  useEffect(() => {
    const interval = setInterval(randomNumber, 10000);
    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div>
      { random % 3 === 0 || random % 5 === 0 ? 'Acerto' : random }
    </div>
  );
}

export default App;
