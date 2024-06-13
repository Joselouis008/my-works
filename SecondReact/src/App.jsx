// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Login from './Login';
import NavPage from './NavPage';
import Photo from './Photo';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/navpage" element={<NavPage />} />
        <Route path="/photo" element={<Photo />} />
      </Routes>
    </div>
  );
  
}

export default App;
