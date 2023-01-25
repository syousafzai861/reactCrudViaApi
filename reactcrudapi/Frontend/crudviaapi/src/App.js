
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from './Components/Update';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Error404 from './Components/Error404';
import AdminLogin from './Components/AdminLogin';
import Resetpassword from './Components/Resetpassword';
import ReadForuser from './Components/ReadForuser';
import Privateroute from './Components/Privateroute';
import Screen2 from './Components/Screen2';



function App() {

  return (
    
    <div className="container">
      {/* <h1 className='text-center'>REACT BASED CRUD APPLICATION VIA API</h1> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/adminlogin" element={<AdminLogin />}></Route>
          <Route exact path="/registration" element={<Registration />}></Route>
          <Route exact path="/login" element={<Login />}>  </Route>
          <Route exact path="/create" element={<Create />}>  </Route>
          <Route exact path="/read" element={<Read />}>  </Route>
          <Route exact path="/update" element={<Update />}>  </Route>
          <Route exact path="*" element={<Error404 />}>  </Route>
          <Route exact path="/reset" element={<Resetpassword />}>  </Route>
          <Route exact path="/sidebar" element={<Screen2/>}>  </Route>


          <Route path="/private" element={<Privateroute />}>
            <Route path="user" element={<ReadForuser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}




export default App;
