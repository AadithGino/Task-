import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserManagement from "./Components/UserManagement/UserManagement";
import AdminLogin from "./Components/AdminLogin/AdminLogin";
import AddEmployee from "./Components/AddEmployee/AddEmployee";
import { useSelector } from "react-redux";
import EditEmployee from "./Components/EditEmployee/EditEmployee";

function App() {
  const adminData = useSelector((state)=>state.adminLoginReducer.adminData)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={adminData ? <UserManagement /> : <Navigate to="../login" />}
          />
          <Route
            path="/login"
            element={adminData ? <Navigate to="../home" /> : <AdminLogin />}
          />
          <Route
            path="/add-employee"
            element={adminData ? <AddEmployee /> : <Navigate to="../login" />}
          />
           <Route
            path="/edit-employee"
            element={adminData ? <EditEmployee /> : <Navigate to="../login" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
