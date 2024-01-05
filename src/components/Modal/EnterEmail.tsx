import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";

export default function EnterEmail({ isOpen, onClose }: any) {
  const toast = useToast();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Enter Your Email</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input placeholder="KhalidBaba.emine.ma" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="primary"
            className="bg-primary hover:bg-primary-hover"
            mr={3}
            onClick={() => {
              onClose();

              toast({
                title: "Check Your Email Inbox",
                status: "info",
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
  );
}
