import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import Navbar from './Components/NavBar';
import About from './Components/About';
import Home from './Components/Home';
import Post from "./Components/DynamicLink";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Navbar /> */}
          <Route path="/" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/category" element={<Post />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
