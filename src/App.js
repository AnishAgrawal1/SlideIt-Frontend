import React from 'react'
import AccountDashboard from './components/AccountDashboard';
import Login from './components/Login';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import { AuthContextProvider } from './context/AuthContext';
import Protected from './context/Protected';
import AccountAnalytics from './components/AccountAnalytics';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/signin' element={<Login />} /> 
          <Route path='/account' element={<Protected><AccountDashboard /></Protected>} />
          <Route path='/analytics' element={<Protected><AccountAnalytics /></Protected>} />  
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
