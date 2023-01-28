import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {Home, Register, Login, Profile, MailSending} from './page/index'
import { AuthProvider } from './context/Authcontext';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/register' element={<Register />} />
          <Route path='/user/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/mailsending' element={<MailSending />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
