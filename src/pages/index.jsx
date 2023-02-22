import React from "react";
import TemporaryDrawer from "../components/Sidebar";
import AppBar from "../components/AppBar";
import Form from "../components/Form";
const index = () => {
  return (
    <div>
      <AppBar />
      <TemporaryDrawer />
      <Form />
    </div>
  );
};

export default index;
