import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import { Route, Router, Routes } from 'react-router-dom';
import Add from './Components/Add';
import View from './Components/View';

function App() {
  return (
    <div className='App'>
      <Navigation/>
      <Routes>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/view' element={<View/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
