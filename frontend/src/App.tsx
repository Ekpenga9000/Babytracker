import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"; 
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import Feeding from "./pages/Feeding";
import Diaper from "./pages/Diaper";
import Nav from "./components/Nav";
function App() {
  return (
    <BrowserRouter>
    <Toaster />
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/feeding" element={<Feeding/>} />
        <Route path="/diaper" element={<Diaper/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
