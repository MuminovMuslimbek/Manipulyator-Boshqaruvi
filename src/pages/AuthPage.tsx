import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography } from "@mui/material";
import { login } from "../features/authSlice";

const AuthPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username == "admin" && password == "admin") {
      dispatch(login());
      navigate("/main");
    } else {
      alert("Login yoki parol noto‘g‘ri!");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 300,
        margin: "auto",
        mt: 10,
      }}
    >
      <Typography variant="h4">Kirish</Typography>
      <TextField
        label="Login"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Parol"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleLogin}>
        Kirish
      </Button>
    </Box>
  );
};

export default AuthPage;
