
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from './Components/Update';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Error404 from './Components/Error404';
function App() {
  return (
    <div className="container">
      <h1 className='text-center'>REACT BASED CRUD APPLICATION VIA API</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/registration" element={<Registration />}>  </Route>
          <Route exact path="/login" element={<Login />}>  </Route>
          <Route exact path="/" element={<Create />}>  </Route>
          <Route exact path="/read" element={<Read />}>  </Route>
          <Route exact path="/update" element={<Update />}>  </Route>
          <Route exact path="*" element={<Error404 />}>  </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
