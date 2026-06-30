import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portal from "./pages/Portal";
import Pertemuan4 from "./pertemuan-4/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/pertemuan-4" element={<Pertemuan4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;