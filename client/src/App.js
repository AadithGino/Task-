import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserManagement from "./Components/UserManagement/UserManagement";
import AdminLogin from "./Components/AdminLogin/AdminLogin";

function App() {
  const userdata = 'false';
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={userdata ? <UserManagement /> : <Navigate to="../login" />}
          />
          <Route
            path="/login"
            element={userdata ? <Navigate to="../home" /> : <AdminLogin />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
