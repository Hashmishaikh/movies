import { Route, Routes } from 'react-router-dom';
import './App.css';
import Popular from './Popular';
import SingleMovie from './SingleMovie';
import TopRated from './TopRated';
import UpComing from './UpComing';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Popular />} />
     <Route path="/top-rated" element={<TopRated />} />
     <Route path="/upcoming" element={<UpComing />} />
     <Route path="/popular/:id" element={<SingleMovie />} />
     </Routes>
    </div>
  );
}

export default App;
