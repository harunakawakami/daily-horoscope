import { Box } from "@chakra-ui/react";
import React from "react";
import LandingPage from "./components/pages/LandingPage";

function App() {
  return (
    <>
      <Box minH="100vh" display="flex" alignItems="center">
        <LandingPage />
      </Box>
    </>
  );
}

export default App;
