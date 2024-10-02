import { useState } from 'react';
import './App.css';
import image from './back.png';

function App() {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);
  const UpdateTime = () =>{
    time = new Date().toLocaleTimeString();
    setCtime (time);
  }

  setInterval (UpdateTime,1000)
  return (
    <div className="App" style ={{
    backgroundImage:`url(${image})`,
    height: "100vh",
    width: "100vw",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat", }}>
      <h1>{ctime}</h1>
    </div>
  );
}

export default App;
