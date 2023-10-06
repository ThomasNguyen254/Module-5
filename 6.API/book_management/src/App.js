import './App.css';
import React from "react";
import {Route, Routes} from "react-router";
import {Create} from "./components/Create";
import {Update} from "./components/Update"
import {List} from "./components/List"
import {NavLink} from "react-router-dom";
function App() {
  return (
      <>
          <NavLink to='/' className="btn btn-primary">LIST</NavLink>
          <NavLink to='/create' className="btn btn-primary ms-2">CREATE</NavLink>
          <Routes>
              <Route path='/' element={<List />}></Route>
              <Route path='/create' element={<Create />}></Route>
              <Route path='/update/:id' element={<Update />}></Route>
              {/*<Route path='/*' element={<NotFound />}></Route>*/}
          </Routes>
      </>
  );
}

export default App;
