import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Appbar from './Components/Appbar';

function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='*' element={<h1>404 page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
