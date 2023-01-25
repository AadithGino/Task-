import React, { useState } from "react";
import { useEffect } from "react";
import "./UserManagement.css";
import { useDispatch, useSelector } from "react-redux";
import {
  adminGetEmployeesAction,
  searchAction,
} from "../../REDUX/Actions/adminAction";
import { Link, useNavigate } from "react-router-dom";
import TopBar from "../TopBar/TopBar";
import AlertDelete from "../Alert/Alert";
import { Alert } from "@chakra-ui/react";
import AddEmployee from "../AddEmployee/AddEmployee";
import Pagination  from "../Pagination/Pagination";

function UserManagement() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deleteSuccessMsg, setdeleteSuccessMsg] = useState(false);
  const [search, setSearch] = useState();
  const [addSuccessMsg, setaddSuccessMsg] = useState(false);
  const diplayNone = false;
  const [currentPage,setCurrentPage]=useState(1);
  const [usersPerPage,setUsersPerPage]=useState(5);

  const employeeData = useSelector((state) => state.employeeDataReducer);
  const employeeAdd = useSelector(
    (state) => state.adminAddEmployeeReducer.addData
  );

  useEffect(() => {
    dispatch(adminGetEmployeesAction());
  }, [deleteSuccessMsg, employeeAdd]);

  const { employeeList, error, loading } = employeeData;
  const indexOflastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOflastUser -  usersPerPage;
  const currentUsers = employeeList?employeeList.slice(indexOfFirstUser,indexOflastUser) :''

  console.log(employeeData);
  
  const setPage = (n)=>{
    setCurrentPage(n)
    console.log(n);
  }
  return (
    <div>
      <TopBar />
      {diplayNone ? <AddEmployee setaddSuccessMsg={setaddSuccessMsg} /> : ""}
      {addSuccessMsg ? <h2>EMPLOYEE ADDED SUCCESSFULLY</h2> : ""}

      <div className="table-responsive">
        <div className="table-wrapper">
          <div>
            <input
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="Search"
              type="text"
              name=""
              id=""
            />
            <button
              className="search-button"
              onClick={() => {
                dispatch(searchAction(search));
              }}
              style={{ backgroundColor: "green", color: "white" }}
            >
              Search
            </button>
          </div>

          <div>
            <select
              onChange={(e) => {
                dispatch(
                  adminGetEmployeesAction(0, e.target.selectedOptions[0].value)
                );
              }}
              name="SORT"
              id=""
            >
              <option value="">SORT</option>
              <option value="Email">EMAIL</option>
              <option value="Date">CREATED DATE</option>
              <option value="Name">NAME</option>
            </select>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Date Created</th>
                <th>Role</th>
                <th>Gender</th>
                <th>Course</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers ? (
                currentUsers.length === 0 ? (
                  <Alert>NO EMPLOYEES</Alert>
                ) : (
                  currentUsers.map((m, i) => {
                    return (
                      <tr>
                        <td>{i + 1}</td>
                        <td>
                          <img
                            className="avatar"
                            style={{ height: "60px", width: "60px" }}
                            src={m.Image}
                            alt=""
                            srcset=""
                          />
                        </td>
                        <td>{m.Name}</td>
                        <td>{m.Email}</td>
                        <td>{m.Mobile}</td>
                        <td>{m.Date}</td>
                        <td>{m.Designation}</td>
                        <td>{m.Gender}</td>
                        <td>{m.Course}</td>
                        <td>
                          <i
                            onClick={() => {
                              navigate("/edit-employee?id=" + m._id);
                            }}
                            className="fa-solid fa-pencil"
                          ></i>
                        </td>
                        <td>
                          <AlertDelete
                            employee={m}
                            setdeleteSuccessMsg={setdeleteSuccessMsg}
                          />
                        </td>
                      </tr>
                    );
                  })
                )
              ) : (
                ""
              )}
            </tbody>
          </table>
          <Pagination usersPerPage={usersPerPage} totalUsers={employeeList?employeeList.length:''} setPage={setPage}/>
          
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
