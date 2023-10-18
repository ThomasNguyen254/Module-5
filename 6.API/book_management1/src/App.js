import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Create} from "./components/Create";
import {Update} from "./components/Update";
import {ShowList} from "./components/List";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<ShowList/>}></Route>
          <Route path="/create" element={<Create/>}></Route>
          <Route path="/update/:id" element={<Update/>}></Route>
        </Routes>
          <ToastContainer></ToastContainer>

      </>
  );
}

export default App;
