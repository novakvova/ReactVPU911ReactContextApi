import * as React from 'react';

import { Route, Routes, BrowserRouter } from "react-router-dom";
import {Header} from './components/Header';

import './App.css';
import { AuthContext, initState } from './auth-context';
import HomePage from './components/Home';
import LoginPage from './components/Login';


const App = () =>  {


  const [auth, setAuth] = React.useState({
    ...initState,
    login: (user)=>{
      setAuth({...auth, isAuth: true, user});
    }
  });

    return (
      <AuthContext.Provider value={auth}>
        <BrowserRouter>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/">
                <Route index element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </AuthContext.Provider>
    );
}



export default App;
