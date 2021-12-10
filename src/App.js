import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import ContactUs from './pages/ContactUs/ContactUs'
import Post from './pages/Post/Post'
import Signup from './pages/Signup/Signup'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="post" element={<Post />} />
          <Route path="signup" element={<Signup />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
