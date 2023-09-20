import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [count,setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);

        return () => clearTimeout(timer)
    }, []);

        return (
            <div>
                <p>Count : {count}</p>
            </div>
        );
}
export default App;
