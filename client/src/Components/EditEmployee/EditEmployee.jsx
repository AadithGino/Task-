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
} from "@chakra-ui/react";
import TopBar from "../TopBar/TopBar";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  adminAddEmployeeAction,
  editEmployeeAction,
  getSingleEmployeeAction,
} from "../../REDUX/Actions/adminAction";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getSingleEmployee } from "../../API/ChatApiCalls";
function EditEmployee({ match }) {
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

  const handleimageSelect = () => {
    inputRef.current.click();
  };

  const employeeData = useSelector((state) => state.getSingleEmployeeReducer);
  // const { singleEmployee, singleEmployeeLoading, singleEmployeeError } =
  // employeeData;

  const getEmployeeDetails = async () => {
    console.log("CALLED");
    // dispatch(getSingleEmployeeAction(id));
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
  console.log(editError);

  const handleSubmit = (e) => {
    console.log(Mobile);
    e.preventDefault();
    dispatch(
      editEmployeeAction(
        Name,
        Email,
        Mobile,
        designation,
        gender,
        course,
        img,
        id
      )
    );
  };
  return (
    <>
      <input
        onChange={(e) => {
          setImage(URL.createObjectURL(e.target.files[0]));
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
            {
              editError?<h2>Email Or Number ALready Registered</h2>:''
            }
            <Stack direction={["column", "row"]} spacing={6}>
              <Center>
                <Avatar size="xl" src={img}>
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
          <FormControl id="userName" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              defaultValue={Name}
              onChange={(e) => setName(e.target.value)}
              placeholder="UserName"
              _placeholder={{ color: "gray.500" }}
              type="text"
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              defaultValue={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Mobile</FormLabel>
            <Input
              defaultValue={Mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Number"
              _placeholder={{ color: "gray.500" }}
              type="number"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Gender</FormLabel>
            <RadioGroup onChange={setGender} value={gender}>
              <Stack direction="row">
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Designation</FormLabel>
            <select
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
          <FormControl id="password" isRequired>
            <FormLabel>Course</FormLabel>
            <Stack spacing={5} direction="row">
              <Checkbox
                checked={course}
                defaultChecked={course}
                name="course"
                onChange={(e) => setCourse(e.target.value)}
                value="BCA"
                colorScheme="blue"
              >
                BCA
              </Checkbox>
              <Checkbox
                checked={course}
                defaultChecked={course}
                name="course"
                onChange={(e) => setCourse(e.target.value)}
                value="MCA"
                colorScheme="blue"
              >
                MCA
              </Checkbox>
              <Checkbox
                checked={course}
                defaultChecked={course}
                name="course"
                onChange={(e) => setCourse(e.target.value)}
                value="BSC"
                colorScheme="blue"
              >
                BSC
              </Checkbox>
            </Stack>
          </FormControl>
          <Stack spacing={6} direction={["column", "row"]}>
            <Button
              bg={"blue.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "blue.500",
              }}
              onClick={handleSubmit}
            >
              {editLoading ? <Spinner /> : "Submit"}
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}

export default EditEmployee;
