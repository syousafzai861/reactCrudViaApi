
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./Components/pages/AdminLogin";
import Sidebar from './Components/Sidebar';
import Registration from "./Components/pages/Registration";
import Login from "./Components/pages/Login";
import Create from "./Components/pages/Create";
import Read from "./Components/pages/Read";
import Update from "./Components/pages/Update";
import Error404 from "./Components/pages/Error404";
import ReadForuser from "./Components/pages/ReadForuser";
import Privateroute from "./Components/pages/Privateroute";


function App() {

  return (
    
    <div className="container">
      {/* <h1 className='text-center'>REACT BASED CRUD APPLICATION VIA API</h1> */}
     
      <BrowserRouter>
         <Sidebar>
        <Routes>
          <Route exact path="/adminlogin" element={<AdminLogin />}></Route>
          <Route exact path="/registration" element={<Registration />}></Route>
          <Route exact path="/login" element={<Login />}>  </Route>
          <Route exact path="/create" element={<Create />}>  </Route>
          <Route exact path="/read" element={<Read />}>  </Route>
          <Route exact path="/update" element={<Update />}>  </Route>
          <Route exact path="*" element={<Error404 />}>  </Route>


          <Route path="/private" element={<Privateroute />}>
            <Route path="user" element={<ReadForuser />} />
          </Route>
        </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
   
  );
}




export default App;
