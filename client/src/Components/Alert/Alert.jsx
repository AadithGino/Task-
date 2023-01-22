import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import {
  clearDelete,
  deleteEmployeeAction,
} from "../../REDUX/Actions/adminAction";


function AlertDelete({ employee, setdeleteSuccessMsg}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const cancelRef = React.useRef();
  const deletedata = useSelector((state) => state.adminDeleteEmployeeReducer);

  let { deleteData, deleteloading, deleteError } = deletedata;
  console.log(deleteData);
  const Delete = () => {
    dispatch(deleteEmployeeAction(employee._id));
  };

  if(deleteData){
    setdeleteSuccessMsg(deleteData)
    dispatch(clearDelete())
  }

  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        Delete
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete {employee.Name} ?
            </AlertDialogHeader>
            {deleteData ? (
              <Alert status="success">
                <AlertIcon />
               {deleteData}
              </Alert>
            ) : (
              ""
            )}
            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              {deleteloading ? (
                <Spinner color="red.500" />
              ) : (
                <Button
                  colorScheme="red"
                  onClick={() => {
                    Delete();
                  }}
                  ml={3}
                >
                  Delete
                </Button>
              )}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default AlertDelete;
