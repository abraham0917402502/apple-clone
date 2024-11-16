import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import './css/styles.css'
import Main from "./components/Main/Main";
import Iphone from "./components/Pages/Iphone/Iphone";
import Mac from "./components/Pages/Mac/Mac";
import Ipad from "./components/Pages/Ipad/Ipad";
import Watch from "./components/Pages/Watch/Watch";
import Tv from "./components/Pages/Tv/Tv";
import Support from "./components/Pages/Support/Support";
import Music from "./components/Pages/Music/Music";
import Four04 from "./components/Pages/Four04/Four04";
import Cart from "./components/Pages/Cart/Cart";
import SharedLayout from "./components/SharedLayout";
import ProductPage from "./components/Pages/Productpage/Productpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="mac" element={<Mac />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="/iphone/:productID" element={<ProductPage />} />
          <Route path="ipad" element={<Ipad />} />
          <Route path="watch" element={<Watch />} />
          <Route path="tv" element={<Tv />} />
          <Route path="music" element={<Music />} />
          <Route path="support" element={<Support />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
