import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserManagement from "./Components/UserManagement/UserManagement";
import AdminLogin from "./Components/AdminLogin/AdminLogin";
import AddEmployee from "./Components/AddEmployee/AddEmployee";
import { useSelector } from "react-redux";
import EditEmployee from "./Components/EditEmployee/EditEmployee";
import Home from "./Components/Home/Home";

function App() {
  const adminData = useSelector((state)=>state.adminLoginReducer.adminData)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route
            path="/"
            element={adminData ? <Home /> : <Navigate to="../login" />}
          />

          <Route
            path="/user-management"
            element={adminData ? <UserManagement /> : <Navigate to="../login" />}
          />
          <Route
            path="/login"
            element={adminData ? <Navigate to="../" /> : <AdminLogin />}
          />
          <Route
            path="/add-employee"
            element={adminData ? <AddEmployee /> : <Navigate to="../" />}
          />
           <Route
            path="/edit-employee"
            element={adminData ? <EditEmployee /> : <Navigate to="../" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
