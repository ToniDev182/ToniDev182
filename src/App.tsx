import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const countValue = document.getElementById('count-value');
    const button = document.getElementById('bro-count-button');

    if (button && countValue) {
      button.addEventListener('click', () => setCount((count) => count + 1));
    }

    return () => {
      if (button) {
        button.removeEventListener('click', () => setCount((count) => count + 1));
      }
    };
  }, []);

  useEffect(() => {
    const countValue = document.getElementById('count-value');
    if (countValue) {
      countValue.textContent = count.toString();
    }
  }, [count]);

  return null; // Todo el HTML se gestiona directamente en el archivo HTML
}

export default App;
