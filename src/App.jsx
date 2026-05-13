import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Router basename='/Movie-Discovery'>
      <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-red-600">
        <Navbar />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </main>
        
        <Footer/>
      </div>
    </Router>
  );
}

export default App;