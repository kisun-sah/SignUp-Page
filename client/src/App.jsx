//import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './signup';  // Renamed to 'Signup'
import{BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from './Login';
import Home from './homepage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>} />

       
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
