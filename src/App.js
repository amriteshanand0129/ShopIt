import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Cart} from "./pages/Cart";
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={< Home />}/>
      <Route path="/cart" element={< Cart />}/>
    </Routes>
  );
}

export default App;
