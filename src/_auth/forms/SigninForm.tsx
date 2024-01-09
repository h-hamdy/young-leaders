import * as React from "react";
import * as z from "zod";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import Loader from "../../components/shared/Loader";
import EnterEmail from "../../components/Modal/EnterEmail";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInValidation } from "../../lib/validation";

const SigninForm = () => {
  const [isLoading, SetisLoading] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const form = useForm<z.infer<typeof SignInValidation>>({
    resolver: zodResolver(SignInValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SignInValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="max-w-[400px] flex flex-col items-center justify-center gap-[15px]">
      <Flex
        direction="column"
        className="justify-center items-center gap-2 pb-8"
      >
        <img src="/assets/images/Logo.png" className="w-[55px] pb-8"></img>
        <h1 className="font-bold text-3xl sm:text-4xl text-black-1 text-center">
          Sign in to your account
        </h1>
        <p className="tracking-tight sm:tracking-wider text-gray-1 text-sm sm:text:md text-center">
          Sign In to join the Yong leaders Comminuty
        </p>
      </Flex>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-[25px]"
      >
        <FormControl isRequired isInvalid={form.formState.errors.email}>
          <FormLabel fontSize="sm">Email</FormLabel>
          <Input type="text" {...form.register("email")} />
          <FormErrorMessage>
            {form.formState.errors.email?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={form.formState.errors.password}>
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
          onClick={() => SetisLoading(!isLoading)}
          isLoading={form.formState.isSubmitting}
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
      </form>
      <Flex className="justify-between w-full">
        <Checkbox size="sm" className="text-xs">
          Remember me
        </Checkbox>
        <button
          className="text-xs text-primary hover:text-primary-hover font-medium"
          onClick={onOpen}
        >
          Forgot your password?
        </button>
      </Flex>

      <EnterEmail isOpen={isOpen} onClose={onClose} />
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
