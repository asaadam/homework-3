import { VStack } from "@chakra-ui/react";
import Navbar from "./Navbar";

function Wrapper(props) {
  return (
    <VStack minH="100vh" minW="100vw">
      <Navbar />
      {props.children}
    </VStack>
  );
}

export default Wrapper;
