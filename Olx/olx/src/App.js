import './App.css';
import react,{useState} from 'react';
import Home from './Pages/Home';

function App() {
  const [active, setActive] = useState("")
  return (
    <div  className="App">
      <Home active={active} setActive={setActive}/>
    </div>
  );
}

export default App;
