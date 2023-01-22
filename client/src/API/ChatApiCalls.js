import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
const token = JSON.parse(localStorage.getItem("adminInfo"));
console.log(token.token);
const config = {
  headers: {
    Authorization: "Bearer " + token?.token,
    
    "Content-type": "application/json",
  },
};

export const adminGetEmployees = (page, sort) =>
  API.post("/get-employees", { page, sort }, config);

export const adminAddEmployee = (
  Name,
  Email,
  Mobile,
  Designation,
  Gender,
  Course,
  Image
) =>
  API.post(
    "/add-employee",
    { Name, Email, Mobile, Designation, Gender, Course, Image },
    config
  );

export const adminLogin = (userName, password) =>
  API.post("/login", { userName, password }, config);

export const getSingleEmployee = (id) => API.get("/single-employee?id=" + id,config);

export const deleteEmployee = (id) => API.get("/delete-employee?id=" + id,config);

export const editEmployee = (
  Name,
  Email,
  Mobile,
  Designation,
  Gender,
  Course,
  Image,
  id
) =>
  API.post(
    "/edit-employee",
    {
      Name,
      Email,
      Mobile,
      Designation,
      Gender,
      Course,
      Image,
      id,
    },
    config
  );

export const Search = (search) => API.get("/search?search=" + search,config);
