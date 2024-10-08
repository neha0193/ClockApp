import { useState } from 'react';
import './App.css';
import Quote from './Quote';

const Clock = () => {
  let time = new Date().toLocaleTimeString();
  let date = new Date().toDateString();
  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }
  setInterval(UpdateTime, 1000)
  return (
    <>
      <h1>{date}</h1>
      <h1>{ctime}</h1>
    </>
  )
};


function App() {

  return (
    <div className="app">
      <Clock />
      <Quote />
    </div>
  );
}

export default App;
