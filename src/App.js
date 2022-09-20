import './App.scss';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Nav/>
      <Routes>
        <Route path='/' exact element={<Homepage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
