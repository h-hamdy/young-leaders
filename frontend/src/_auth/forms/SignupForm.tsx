import * as React from "react";
import * as z from "zod";
import axios from 'axios';


import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useToast
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import Loader from "../../components/shared/Loader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpValidation } from "../../lib/validation";

const SignupForm = () => {
  const [isLoading, SetisLoading] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  
  const form = useForm<z.infer<typeof SignUpValidation>>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const handleSubmit = async () => {
    const formData = form.getValues();

    if (!form.formState.errors.email && !form.formState.errors.password && !form.formState.errors.username) {
      try {
        const response = await axios.post('http://localhost:8000/register', formData, { withCredentials: true });
        console.log(response.status )
        if (response.status === 200) {
          SetisLoading(false);
          toast({
            title: 'Email confirmation',
            description: `Dear ${formData.username}, please check your Email inbox.`,
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
        }
        
      } catch (error) {
        SetisLoading(false)
        toast({
          title: 'Sign-up Error',
          description: `Error while Tring to Create an account`,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
        console.error('Error:', error);
      }
    }
  };

  const handleGoogleSignIn = () => {
    axios.get('http://localhost:8000/api/google-oauth2/login/raw/callback/')
      .catch(error => {
        console.error('Error signing in with Google:', error);
      });
  };

  function onSubmit(values: z.infer<typeof SignUpValidation>) {
    SetisLoading(!isLoading);
    console.log(values);
  }

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
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-[25px]"
      >

        <FormControl isRequired isInvalid={!!form.formState.errors.username}>
          <FormLabel fontSize="sm">Username</FormLabel>
          <Input type="text" {...form.register("username")} />
          <FormErrorMessage>
            {form.formState.errors.username?.message}
          </FormErrorMessage>
        </FormControl>


        <FormControl isRequired isInvalid={!!form.formState.errors.email}>
          <FormLabel fontSize="sm">Email</FormLabel>
          <Input type="email" {...form.register("email")} />
          <FormErrorMessage>
            {form.formState.errors.email?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!form.formState.errors.password}>
          <FormLabel fontSize="sm">Password</FormLabel>

          <InputGroup
            size="md"
            className="focus:outline-none focus:border-black"
          >
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              {...form.register("password")}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="xs" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            {form.formState.errors.password?.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          isLoading={form.formState.isSubmitting}
          colorScheme="primary"
          className="bg-primary w-full transition-colors duration-100 hover:bg-primary-hover"
          onClick={handleSubmit}

        >
          {isLoading ? (
            <div className="flex gap-2">
              <Loader size="sm" />
              <div>Loading...</div>
            </div>
          ) : (
            <div>Sign Up</div>
          )}
        </Button>
      </form>
      <Button variant="outline" className="w-full" onClick={handleGoogleSignIn}>
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
