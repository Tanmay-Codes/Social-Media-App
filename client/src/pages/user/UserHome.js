import styled from "@emotion/styled";
import { Stack } from "@mui/system";
import React from "react";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import { Route, Routes } from "react-router-dom";
import Gigs from "../gigs/Gigs";
// import Navbar from "../../components/navbar/Navbar";
// import { Outlet, Route, Routes } from "react-router-dom";
function UserHome({ mode, setMode }) {
  const StyledStack = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    display: "flex",
    justifyContent: "space-between",
  }));

  return (
    <>
      <br />
      <StyledStack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Routes>
          <Route path=":id/feed" element={<Feed />} />
          <Route path=":id/gigs" element={<Gigs />} />
        </Routes>
        <Rightbar />
      </StyledStack>
    </>
  );
}

export default UserHome;
