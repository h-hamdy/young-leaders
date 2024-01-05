import * as React from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Loader from "../../components/shared/Loader";

const SignupForm = () => {
  const [isLoading, SetisLoading] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div className="max-w-[400px] flex flex-col items-center justify-center gap-[15px]">
      <Flex
        direction="column"
        className="justify-center items-center gap-2 pb-8"
      >
        <img src="/assets/images/Logo.png" className="w-[55px] pb-8"></img>
        <h1 className="font-bold text-3xl sm:text-4xl sm:tracking-tighter text-black-1 text-center">
          Join Young Leaders Now
        </h1>
        <p className="tracking-tight sm:tracking-wider text-gray-1 text-sm sm:text:md text-center">
          Create An Account To Become a Young Leader
        </p>
      </Flex>
      <FormControl isRequired>
        <FormLabel fontSize="sm">Name</FormLabel>
        <Input type="username" name="title" />
      </FormControl>
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
      <Button variant="outline" className="w-full">
        <img src="/assets/icons/Google.png" className="w-[20px] mx-2"></img>
        Sign in with Google
      </Button>
      <button className="text-sm">
        Already have an account?{" "}
        <Link to="/sign-in">
          <span className="text-primary hover:text-primary-hover font-medium">
            Sign In
          </span>
        </Link>
      </button>
    </div>
  );
};

export default SignupForm;
