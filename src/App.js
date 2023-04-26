import './App.css';
import Privacy from '../src/Pages/Privacy'
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Privacy/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
