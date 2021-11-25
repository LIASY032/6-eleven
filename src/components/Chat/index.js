import React from "react";
import { ChatLeftDots } from "react-bootstrap-icons";
function Chat() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#385F4B",
          position: "fixed",
          bottom: "3vh",
          right: "3vw",
        }}
      >
        <ChatLeftDots size={30} color="white" style={{ margin: "3vh" }} />
      </div>
    </>
  );
}

export default Chat;
