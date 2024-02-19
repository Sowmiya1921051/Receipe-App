import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
