import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Confirm from "./pages/confirm/Confirm";
import CardForm from "./pages/payment/CardForm";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/confirm" element={<Confirm/>}/>
        <Route path="/payment" element={<CardForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
