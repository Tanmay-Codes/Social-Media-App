import { Box } from "@mui/system";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import User from "./pages/user/User";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/logIn/Login";
import Profile from "./pages/profile/Profile";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#9A1750",
      },
      secondary: {
        main: "#E3E2DF",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={
          mode === "light"
            ? { bgcolor: "secondary.light" }
            : { bgcolor: "background.default" }
        }
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/user/:id/profile"
            element={<Profile mode={mode} setMode={setMode} />}
          />
          <Route
            path="/user/*"
            element={<User mode={mode} setMode={setMode} />}
          />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
