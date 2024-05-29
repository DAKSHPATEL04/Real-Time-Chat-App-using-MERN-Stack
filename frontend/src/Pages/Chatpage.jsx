// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { ChatState } from "../../Context/ChatProvider";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import Mychats from "../components/miscellaneous/Mychats";
import ChatBox from "../components/miscellaneous/ChatBox";

const Chatpage = () => {
  // Accessing user state from ChatState context
  const { user } = ChatState();

  // State to control fetching data again
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {/* Conditionally render SideDrawer if user is logged in */}
      {user && <SideDrawer />}
      {/* Main content area with Mychats and ChatBox components */}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {/* Conditionally render Mychats component */}
        {user && <Mychats fetchAgain={fetchAgain} />}
        {/* Conditionally render ChatBox component */}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
