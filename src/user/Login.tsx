import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig/ELearning";
import Swal from "sweetalert2";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from "react-redux";
import { setUserData } from "../Redux/userActions";

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
const defaultTheme = createTheme();

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [disable, setDisable] = useState(false);
    const [user, setUser] = useState({
      username: "",
      password: "",
    });
    const [errors, setErrors] = useState({
      usernameError: "",
      passwordError: "",
    });
  
    function validation(event: React.ChangeEvent<HTMLInputElement>) {
      //title
      if (event.target.name === "username") {
        setUser({ ...user, username: event.target.value });
        setErrors({
          ...errors,
          usernameError:
            event.target.value.length === 0 ? "This field is Required" : "",
        });
      } else if (event.target.name === "password") {
        setUser({ ...user, password: event.target.value });
        setErrors({
          ...errors,
          passwordError:
            event.target.value.length === 0 ? "This field is Required" : "",
        });
      }
    }
  
    useEffect(() => {
      const hasErrors = Object.values(errors).some((error) => error !== "");
      if (!hasErrors) {
        if (user.username && user.password) {
          setDisable(true);
        } else {
          setDisable(false);
        }
      } else {
        setDisable(false);
      }
    }, [errors, user]);
  
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      e.preventDefault();
      function isTokenPresent() {
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
          const [name, value] = cookie.trim().split('=');
          if (name === 'token' && value !== '') {
            return true;
          }
        }
        return false;
      }
      if (isTokenPresent()) {
        navigate("/dashboard");
      } else {
        if (user.username && user.password) {
  
          const loginUser = { username: user.username, password: user.password };
          // console.log(loginUser);
          const res = await axiosInstance.post(`/users/login`, loginUser);
          if (res) {
            console.log(res);
            // setId(res.data.user._id);
            // setName(res.data.user.username);
            dispatch(setUserData(res.data.user._id, res.data.user.username));
            navigate("/dashboard");
          } else {
            Swal.fire({
              icon: "error",
              title: "Unauthorized",
              text: "Check your username and password",
            });
          }
  
          setUser({
            username: "",
            password: "",
          });
          setErrors({
            usernameError: "",
            passwordError: "",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Check Your Data",
            text: "Missing Data or Invalid Input",
          });
        }
      }
    };
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://i.postimg.cc/vZLJWtTY/2b8f6b121e6e8255eefd2565646c711d.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" noValidate onSubmit={handleFormSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  value={user.username}
                  onChange={(e) => validation(e as React.ChangeEvent<HTMLInputElement>)}
                  onBlur={(e) => validation(e as React.ChangeEvent<HTMLInputElement>)}
                  required
                  fullWidth
                  id="Username"
                  label="Username"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  onChange={(e) => validation(e as React.ChangeEvent<HTMLInputElement>)}
                  onBlur={(e) => validation(e as React.ChangeEvent<HTMLInputElement>)}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/register" variant="body2">
                  Don&apos;t have an account? Register
                </Link>
              </Grid>
            </Grid>
          </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}