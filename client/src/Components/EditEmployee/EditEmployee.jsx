import React from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  RadioGroup,
  Radio,
  Select,
  Checkbox,
  Spinner,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import TopBar from "../TopBar/TopBar";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  adminAddEmployeeAction,
  clearEdit,
  editEmployeeAction,
  getSingleEmployeeAction,
} from "../../REDUX/Actions/adminAction";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getSingleEmployee } from "../../API/ChatApiCalls";
import { useForm } from "react-hook-form"


function EditEmployee({ match }) {
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { search } = useLocation();
  const id = new URLSearchParams(search).get("id");
  console.log(id);
  const navigate = useNavigate();
  const inputRef = useRef();
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Mobile, setMobile] = useState();
  const [gender, setGender] = useState();
  const [designation, setDesignation] = useState();
  const [course, setCourse] = useState();
  const [img, setImage] = useState();
  const [newImage,setnewImage]=useState(false);

  const handleimageSelect = () => {
    inputRef.current.click();
  };

  const employeeData = useSelector((state) => state.getSingleEmployeeReducer);

  const getEmployeeDetails = async () => {
    console.log("CALLED");
    
    const singleEmployee = await getSingleEmployee(id);
    console.log(singleEmployee);
    if (singleEmployee) {
      console.log(singleEmployee);
      setName(singleEmployee.data.Name);
      setEmail(singleEmployee.data.Email);
      setMobile(singleEmployee.data.Mobile);
      setGender(singleEmployee.data.Gender);
      setDesignation(singleEmployee.data.Designation);
      setCourse(singleEmployee.data.Course);
      setImage(singleEmployee.data.Image);
    }
  };

  useEffect(() => {
    getEmployeeDetails();
  }, []);

  const editEmployee = useSelector((state) => state.editEmployeeReducer);

  const { editData, editLoading, editError } = editEmployee;
  if (editData) {
    dispatch(clearEdit());
    navigate("/user-management");
  }

  const handlesubmit = (e) => {
    console.log(Mobile);
    // e.preventDefault();
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "noteapp");
    data.append("cloud_name", "dhajqatgt");
    fetch("https://api.cloudinary.com/v1_1/dhajqatgt/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImage(data.url);
        dispatch(
          editEmployeeAction(
            Name,
            Email,
            Mobile,
            designation,
            gender,
            course,
            data.url,
            id
          )
        );
      });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          handlesubmit()
        })}
      >
        <input
          onChange={(e) => {
            setImage(e.target.files[0]);
            setnewImage(e.target.files[0])
          }}
          ref={inputRef}
          type="file"
          style={{ display: "none" }}
          name=""
          id=""
        />
        <TopBar />
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack
            spacing={4}
            w={"full"}
            maxW={"md"}
            bg={useColorModeValue("white", "gray.700")}
            rounded={"xl"}
            boxShadow={"lg"}
            p={6}
            my={12}
          >
            <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
              Add Employee
            </Heading>
            <FormControl id="userName">
              <FormLabel>User Profile</FormLabel>
              <Stack direction={["column", "row"]} spacing={6}>
                <Center>
                  <Avatar size="xl" src={newImage?URL.createObjectURL(newImage):img}>
                    <AvatarBadge
                      as={IconButton}
                      size="sm"
                      rounded="full"
                      top="-10px"
                      colorScheme="red"
                      onClick={() => setImage("")}
                      aria-label="remove Image"
                      // icon={ }
                    >
                      x
                    </AvatarBadge>
                  </Avatar>
                </Center>
                <Center w="full">
                  <Button w="full" onClick={handleimageSelect}>
                    Change Icon
                  </Button>
                </Center>
              </Stack>
            </FormControl>
            {editError ? (
              <Alert status="error">
                <AlertIcon />
                {editError}
              </Alert>
            ) : (
              ""
            )}
            <FormControl id="userName">
              <FormLabel>Name</FormLabel>
              <Input
                defaultValue={Name}
                {...register("UserName", { required: true })}
              
                onChange={(e) => setName(e.target.value)}
                placeholder="UserName"
                name="UserName"
                _placeholder={{ color: "gray.500" }}
                type="text"
              />
              {errors.UserName && (
                <span style={{ color: "red" }}>Enter a valid Name</span>
              )}
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                {...register("Email", { required: true })}
                defaultValue={Email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                name="Email"
                _placeholder={{ color: "gray.500" }}
                type="email"
              />
              {errors.Email && (
                <span style={{ color: "red" }}>Enter a valid Email</span>
              )}
            </FormControl>
            <FormControl id="password">
              <FormLabel>Mobile</FormLabel>
              <Input
                {...register("Mobile", { minLength: 10,maxLength:10 ,required: true })}
                defaultValue={Mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Number"
                _placeholder={{ color: "gray.500" }}
                type="number"
              />
              {errors.Mobile && (
                <span style={{ color: "red" }}>Enter a valid number</span>
              )}
            </FormControl>
            <FormControl id="password">
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                {...register("Gender", { required: true })}
                onChange={setGender}
                value={gender}
              >
                <Stack direction="row">
                  <Radio value="Male">Male</Radio>
                  <Radio value="Female">Female</Radio>
                </Stack>
              </RadioGroup>
              {errors.Gender && (
                <span style={{ color: "red" }}>Select Gender</span>
              )}
            </FormControl>
            <FormControl id="password">
              <FormLabel>Designation</FormLabel>
              <select
                {...register("Designation", { required: true })}
                value={designation}
                onChange={(e) => {
                  setDesignation(e.target.selectedOptions[0].value);
                }}
              >
                <option value="">--Choose an option--</option>
                <option value="HR">HR </option>
                <option value="MANAGER">MANAGER</option>
                <option value="SALES">SALES</option>
              </select>
            </FormControl>
            {errors.Designation && (
              <span style={{ color: "red" }}>Select a designation</span>
            )}
            <FormControl id="password">
              <FormLabel>Course</FormLabel>
              <Stack spacing={5} direction="row">
               
              <label htmlFor="">BCA</label>
                <input
                  {...register("Course", { required: true })}
                  type="checkbox"
                  checked={course === "BCA"}
                  onChange={() => setCourse("BCA")}
                />
                <label htmlFor="">MCA</label>
                <input
                {...register("Course", { required: true })}
                  type="checkbox"
                  checked={course === "MCA"}
                  onChange={() => setCourse("MCA")}
                />
                <label htmlFor="">BSC</label>
                <input
                {...register("Course", { required: true })}
                  type="checkbox"
                  checked={course === "BSC"}
                  onChange={() => setCourse("BSC")}
                />
              </Stack>
              
              {errors.Course && (
              <span style={{ color: "red" }}>Select a Course</span>
            )}
            </FormControl>
            <Stack spacing={6} direction={["column", "row"]}>
              <Button
                bg={"blue.400"}
                color={"white"}
                type="submit"
                w="full"
                _hover={{
                  bg: "blue.500",
                }}
              >
                {editLoading ? <Spinner /> : "Submit"}
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </form>
    </>
  );
}

export default EditEmployee;
