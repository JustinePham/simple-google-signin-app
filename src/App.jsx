import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Landing from './pages/landing';
import Other from './pages/other';
 import { useNavigate } from 'react-router-dom'; // Add this line
import { useUser } from './providers/userProvider';
function App() {
  const navigate = useNavigate(); // Add this line
 console.log(useUser());
  return (
    <Routes>
      <Route path="/" element={
        <Landing></Landing>
      } />
      <Route path="/home" element={<Home></Home>} />
      <Route path="/other" element={<Other></Other>} />
    </Routes>
  )
}

export default App
