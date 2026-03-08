import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import EmptyPage from './components/EmptyPage';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empty" element={<EmptyPage />} />
        </Routes>
    </Router>
  );
}

export default App
