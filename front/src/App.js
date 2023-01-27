import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home, Register, Login, Profile} from './page/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/register' element={<Register />} />
        <Route path='/user/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
