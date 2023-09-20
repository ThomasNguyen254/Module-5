import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [count1,setCount1] = useState(0);
  const [count2,setCount2] = useState(0);
  return (
    <div className="App">
      <p> Count1 : {count1}</p>
      <button onClick={() => setCount1((c) => c + 1)}>
        +1
      </button>

      <p> Count2 : {count2}</p>
      <button onClick={() => setCount2((c) => c + 2)}>
        +2
      </button>

    </div>
  );
}

export default App;
