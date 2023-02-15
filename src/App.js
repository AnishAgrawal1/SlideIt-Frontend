import React from 'react'
import AccountDashboard from './components/AccountDashboard';
import Login from './components/Login';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import { ChakraProvider } from '@chakra-ui/react'
import { AuthContextProvider } from './context/AuthContext';
import Protected from './context/Protected';

function App() {
  return (
    <div>
      <ChakraProvider>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/signin' element={<Login />} /> 
          <Route path='/account' element={<Protected><AccountDashboard /></Protected>} />
        </Routes>
      </AuthContextProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
