import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EsevaiPage from './pages/EsevaiPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/esevai" element={<EsevaiPage />} />
      </Routes>
    </Router>
  );
}

export default App;
