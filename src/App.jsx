import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //needed for the routes of our pages;
import NavBar from "./components/NavBar";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route index element={<Page1 />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
