import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Rounting from "./routes";
import GlobalStyle from './styles/global'
import Header from './components/header';
import { CartContextProvider } from "./context/cart";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Rounting/>
      </BrowserRouter>
      <GlobalStyle/>
   </CartContextProvider>
  );
}

export default App;
