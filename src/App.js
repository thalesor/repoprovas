import React, { useEffect } from 'react';
import GlobalStyle from "./styles/globalStyle";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './views/Header/Index';
import SignUp from './views/SignUp/Index';
import SignIn from './views/SignIn/Index';
import Home from './views/Home/Index';
import { GlobalProvider }  from "./contexts/GlobalContext";

function App() {
 
  return (
    <GlobalProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
               <>
               <Header/>
               <SignIn />
               </>
               }></Route> 
            <Route path="/signup" element={
               <>
               <Header/>
               <SignUp />
               </>
               }></Route> 
              <Route path="/home" element={
                <>
                <Header/>
                <Home />
                </>
              }></Route>
          </Routes>
        </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
