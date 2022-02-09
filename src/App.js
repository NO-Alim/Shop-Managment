import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
