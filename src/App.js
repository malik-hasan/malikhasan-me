import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from './components/Home'
import OuterSpace from "./components/OuterSpace";

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="outer-space" element={<OuterSpace />} />
          <Route path="*" element={<OuterSpace error={true} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
