import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Cart} from "./pages/Cart";
import { AuthLogin } from "./pages/AuthLogin";
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={< Home />}/>
      <Route path="/cart" element={< Cart />}/>
      <Route path="/auth/login" element={< AuthLogin />}/>      
    </Routes>
  );
}

export default App;
