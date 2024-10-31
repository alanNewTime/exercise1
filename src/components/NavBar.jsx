import { useNavigate } from "react-router-dom"; // Helps with navigation
import { BrowserRouter, Routes, Route } from "react-router-dom"; //needed for the routes of our pages;
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";

function NavBar() {
  //const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>NAVBARRRRRRRRRRRRRRRR</h1>
        <button
        // onClick={() => {
        //   navigate("/pages/page1");
        // }}
        >
          page1
        </button>
        <button
        // onClick={() => {
        //   navigate("/pages/page2");
        // }}
        >
          page2
        </button>

        {/* <BrowserRouter>
          <Routes>
            <Route index element={<Page1 />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
          </Routes>
        </BrowserRouter> */}
      </div>
    </>
  );
}

export default NavBar;
