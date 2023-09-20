import { styled } from "@mui/material/styles";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import SignUpForm from "../../components/userDetails/SignUpForm";
import SignupForm from "../../components/formikForms/SignupForm";
import newRequest from "../../utils/newRequest";

const StyledStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
  justifyContent: "center",
  alignItems: "center",
}));

function Login() {
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      console.log(res.data);
      navigate("/user/:id/feed");
    } catch (err) {
      setError(err.response.data);
      console.log(err.response.data);
    }
  };
  return (
    <Box sx={{ height: "100vh", display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "1200px", margin: "0 auto", alignSelf: "center" }}>
        <StyledStack direction="row" spacing={{ xs: 0, sm: 20 }}>
          <Stack>
            <Typography variant="h2">JaMclef</Typography>
          </Stack>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <Typography variant="h6">Login</Typography>
              <TextField
                label="Username"
                variant="outlined"
                onChange={(e) => setUsername(e.target.value)}
              ></TextField>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
              ></TextField>
              <Typography variant="h5" color="red">
                {error && error}
              </Typography>
              <Stack direction="row" spacing={3}>
                <Button type="submit" aria-label="login" variant="contained">
                  {/* <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to="/user/:id/feed"
                  > */}
                  Login
                  {/* </Link> */}
                </Button>
                <Button
                  aria-label="login"
                  variant="contained"
                  onClick={() => setOpen(true)}
                >
                  SignUP
                </Button>
                {/* <SignUpForm open={open} setOpen={setOpen} /> */}
                <SignupForm open={open} setOpen={setOpen} />
              </Stack>
            </Stack>
          </form>
        </StyledStack>
      </Box>
    </Box>
  );
}

export default Login;
