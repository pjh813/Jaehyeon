import './App.css';
import { Routes, Route } from 'react-router-dom';
import EditPage from './pages/EditPage.js';
import ResultPage from './pages/ResultPage.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<EditPage/>}/>
        <Route path='/result' element={<ResultPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
