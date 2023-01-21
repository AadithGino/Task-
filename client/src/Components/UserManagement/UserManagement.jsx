import React from "react";
import "./UserManagement.css";

function UserManagement() {
  return (
    <div>
      <div class="container-xl">
        <div class="table-responsive">
          <div class="table-wrapper">
            <div class="table-title">
              <div class="row">
                <div class="col-sm-5">
                  <h2>
                    User <b>Management</b>
                  </h2>
                </div>
                <div class="col-sm-7">
                  <a class="btn btn-secondary">
                    <i className="fa-solid fa-plus"></i>{" "}
                    <span>Add New User</span>
                  </a>
                </div>
              </div>
            </div>
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Date Created</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <img class="avatar" src="" alt="" srcset="" /> Aadith
                  </td>
                  <td>04/10/2013</td>
                  <td>Admin</td>
                  <td>
                    <span class="status text-success">&bull;</span> Active
                  </td>
                  <td>
                    <i class="material-icons">&#xE5C9;</i>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* <div class="clearfix">
                <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                <ul class="pagination">
                    <li class="page-item disabled"><a href="#">Previous</a></li>
                    <li class="page-item"><a href="#" class="page-link">1</a></li>
                    <li class="page-item"><a href="#" class="page-link">2</a></li>
                    <li class="page-item active"><a href="#" class="page-link">3</a></li>
                    <li class="page-item"><a href="#" class="page-link">4</a></li>
                    <li class="page-item"><a href="#" class="page-link">5</a></li>
                    <li class="page-item"><a href="#" class="page-link">Next</a></li>
                </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
