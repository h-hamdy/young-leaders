import { Navigate } from "react-router";
import * as React from "react";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";


import { Link } from "react-router-dom";
import Loader from "../../components/shared/Loader";

const SigninForm = () => {
  const [isLoading, SetisLoading] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)


  return (
    <div className="max-w-[400px] flex flex-col items-center justify-center gap-[15px]">
      <Flex
        direction="column"
        className="justify-center items-center gap-2 pb-8"
      >
        <img src="/assets/images/Logo.png" className="w-[55px] pb-8"></img>
        <h1 className="font-bold text-3xl sm:text-4xl text-black-1">
          Sign in to your account
        </h1>
        <p className="tracking-tight sm:tracking-wider text-gray-1 text-sm sm:text:md">
          Sign In to join the Yong leaders Comminuty
        </p>
      </Flex>
      <FormControl isRequired>
        <FormLabel fontSize="sm">Email</FormLabel>
        <Input type="email" name="title" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel fontSize="sm">Password</FormLabel>

        <InputGroup size="md" className="focus:outline-none focus:border-black">
          <Input pr="4.5rem" type={show ? "text" : "password"} />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="xs" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        onClick={() => SetisLoading(!isLoading)}
        colorScheme="primary"
        className="bg-primary w-full transition-colors duration-100 hover:bg-primary-hover"
      >
        {isLoading ? (
          <div className="flex gap-2">
            <Loader size="sm" />
            <div>Loading...</div>
          </div>
        ) : (
          <div>Sign In</div>
        )}
      </Button>
      <Flex className="justify-between w-full">
        <Checkbox size="sm" className="text-xs">
          Remember me
        </Checkbox>
        <button className="text-xs text-primary hover:text-primary-hover font-medium" onClick={onOpen}>
          Forgot your password?
        </button>
      </Flex>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Your Email</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input ref={initialRef} placeholder='KhalidBaba.emine.ma' />
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='primary' className="bg-primary hover:bg-primary-hover" mr={3} 
			onClick={() => {

				onClose();
	  
				toast({
				  title: 'Check Your Email Inbox',
				  status: 'info',
				  isClosable: true,
				  duration: 2000,
				});
			  }}
			>
              Send
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <button className="text-sm">
        Don't have an account?{" "}
        <Link to="/sign-up">
          <span className="text-primary hover:text-primary-hover font-medium">
            Sign up
          </span>
        </Link>
      </button>
    </div>
  );
};

export default SigninForm;
