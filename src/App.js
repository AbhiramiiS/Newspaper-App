import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import NavBar from './components/NavBar';
import View from './components/View';
import Search from './components/Search';
import Delete from './components/Delete';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/delete" element={<Delete/>}/>
      <Route path="/navbar" element={<NavBar/>}/>
      <Route path="/view" element={<View/>}/>
      <Route path="/search" element={<Search/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;