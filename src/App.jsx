import {  Route, Routes } from 'react-router-dom';

import Home from './pages/Home'


const App = () => {
  return (
    <div className="bg-black">
      <div>
       <Routes>
         <Route path="/" element={<Home />} />
       </Routes>
     </div>
    </div>

     
  );
};

export default App;
