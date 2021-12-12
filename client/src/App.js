import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import TopNav from './Components/TopNav';

function App() {
  return (
    <div>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
