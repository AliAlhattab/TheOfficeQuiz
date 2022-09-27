import './App.scss';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Leaderboard from './pages/Leaderboard';
import Game from './components/Game/Game';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Nav/>
      <Routes>
        <Route
        path="*"
        element={<Navigate to="/home" replace />}
    />
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/leadersboard' exact element={<Leaderboard/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
