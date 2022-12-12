import './App.css';
import Counter from './components/counter/Counter';
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);
  // let count = 0
  // const increment = () => {
  //   ++count
  //   console.log(count)
  // }

  return (
    <div className="App">
      <header className="App-header">
        <Counter count={count} setCount={setCount} />

      </header>
    </div>
  );
}

export default App;
