import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import TopNav from './Components/TopNav';
import Things from './Pages/Things';

function App() {
  return (
    <div>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/things" element={<Things />} />
      </Routes>
    </div>
  );
}

export default App;
