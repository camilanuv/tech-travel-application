import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Rounting from "./routes";
import GlobalStyle from './styles/global'
import Header from './components/header';

function App() {
  return (
    <>
   <BrowserRouter>
    <Header />
    <Rounting/>
   </BrowserRouter>
   <GlobalStyle/>
   </>
  );
}

export default App;
