import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  const getData = async () => {
    let d = null;
    try {
      const response = await axios.get("http://localhost:8080/getUsers");
      d = JSON.parse(response.data);
    } catch (err) {
      console.log(err);
    }
    console.log(d);
    setData(d);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  console.log(data?.restaurant?.name);
  console.log(data?.restaurant?.menu);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home restaurantName={data?.restaurant?.name} />}
          />
          <Route
            path="/about"
            element={<About aboutData={data?.restaurant} />}
          />
          <Route
            path="/contact"
            element={
              <Contact contactData={data?.restaurant?.online_presence} />
            }
          />
          <Route
            path="/menu"
            element={<Menu menuData={data?.restaurant?.menu?.categories} />}
          />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
