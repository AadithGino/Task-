import React, { useState } from "react";
import "./AdminLogin.css";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Spinner,
  Alert,
  AlertIcon
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminLoginAction } from "../../REDUX/Actions/adminAction";
function AdminLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleShowClick = (e) => setShowPassword(!showPassword);

  const loginData = useSelector((state) => state.adminLoginReducer);
  const { adminData, loading, error } = loginData;

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(adminLoginAction(userName, password));
  };

  console.log(error);
  if (adminData) {
    // navigate("/home");
    console.log(adminData);
    
  }
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
       {
        error?  <Alert status='error'>
        <AlertIcon />
        {error}
      </Alert> :''
       }
        <Box minW={{ base: "90%", md: "468px" }}>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    // children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    {...register("UserName")}
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    placeholder="UserName"
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    // children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                onClick={(e) => {
                  handlesubmit(e);
                }}
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                {loading? <Spinner/> :'Login'}
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}

export default AdminLogin;
