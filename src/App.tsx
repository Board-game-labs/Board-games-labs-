/* eslint-disable prefer-const */
import { useComponentValue } from "@dojoengine/react";
import { Entity } from "@dojoengine/recs";
import { useEffect, useState } from "react";
import { getEntityIdFromKeys } from "@dojoengine/utils";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tictactoe from "./pages/Tictactoe";
import Launch from "./pages/Launch";
import './index.css';
import Gamepage from "./pages/Game/[id]";
import { ChakraProvider } from '@chakra-ui/react'
import AppProvider from "./context/Appcontext";



function App() {
  const [gaemeid, setGameID] = useState('')


  return (
    <>
      <div>
      <ChakraProvider>
        <AppProvider>
      <BrowserRouter>
              <Routes>
                <Route path="/tictactoe" element={<Tictactoe />} />
                <Route path="/app" element={<Launch />} />
                <Route path="/" element={<Home />} />
                <Route path="/Game/:id" element={<Gamepage />} />
              </Routes>
            </BrowserRouter>
        </AppProvider>
      </ChakraProvider>
      </div>
    </>
  );
}

export default App;
