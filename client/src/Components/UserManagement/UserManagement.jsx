import React, { useState } from "react";
import { useEffect } from "react";
import "./UserManagement.css";
import { useDispatch, useSelector } from "react-redux";
import { adminGetEmployeesAction, searchAction } from "../../REDUX/Actions/adminAction";
import { Link, useNavigate } from "react-router-dom";
import TopBar from "../TopBar/TopBar";
import Alert from "../Alert/Alert";


function UserManagement() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addSuccessMsg,setaddSuccessMsg]=useState(false)
  const [search,setSearch]=useState();
  useEffect(() => {
    dispatch(adminGetEmployeesAction());
  }, []);

  const employeeData = useSelector((state) => state.employeeDataReducer);
  const employeeAdd = useSelector((state)=>state.adminAddEmployeeReducer);

  const { employeeList, error, loading } = employeeData;
  let { addData, addError, addloading} = employeeAdd;


  console.log(employeeData);
  return (
    <div>
      <TopBar />
{
  addSuccessMsg?<h2>EMPLOYEE ADDED SUCCESS FULLY</h2> :''
}
      <div className="table-responsive">
        <div className="table-wrapper">
          <div>
           
            <input
            onChange={(e)=>setSearch(e.target.value)}
              placeholder="Search..."
              className="Search"
              type="text"
              name=""
              id=""
            />
            <button
              className="search-button"
              onClick={()=>{
                dispatch(searchAction(search))
              }}
              style={{ backgroundColor: "green", color: "white" }}
            >
              Search
            </button>
          </div>

          <div>
          <select onChange={(e) => {
                dispatch(adminGetEmployeesAction(0,e.target.selectedOptions[0].value));
              }} name="SORT" id="">
            <option value="">SORT</option>
            <option value="Email">EMAIL</option>
            <option value="Date">CREATED DATE</option>
            <option value="Mobile">Mobile</option>
          </select>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Date Created</th>
                <th>Role</th>
                <th>Course</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {employeeList
                ? employeeList.length < 0 ? <h2>NO EMPLOYEES</h2> :employeeList.map((m, i) => {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>
                        <img className="avatar" src="" alt="" srcset="" />{" "}
                        {m.Name}
                      </td>
                      <td>{m.Email}</td>
                      <td>{m.Mobile}</td>
                      <td>{m.Date}</td>
                      <td>{m.Designation}</td>
                      <td>{m.Course}</td>
                      <td>
                        <i
                          onClick={() => {
                            navigate("/edit-employee?id=" + m._id);
                            // dispatch(getSingleEmployeeAction(m._id));
                          }}
                          className="fa-solid fa-pencil"
                        ></i>
                      </td>
                      <td>
                        <Alert
                          employee={m}
                         
                        />
                      </td>
                    </tr>
                  );
                })
                : ""}
            </tbody>
          </table>
          <div className="clearfix">
            <div className="hint-text">
              Showing <b>5</b> out of <b>25</b> entries
            </div>
            <ul className="pagination">
              <li className="page-item disabled">
                <a href="#">Previous</a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  1
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  2
                </a>
              </li>
              <li className="page-item active">
                <a href="#" className="page-link">
                  3
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  4
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  5
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
