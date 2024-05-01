import HourglassTopTwoToneIcon from "@mui/icons-material/HourglassTopTwoTone";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Avatar, Button, CircularProgress, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const goToCourses = () => {
    navigate("/courses")
  }
  const startExam = ()=>{

    navigate("/exam/66324d23c925ae1951b37a0e");
    
    }
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                px: 5,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Grid item xs={12} md={8} lg={8}>
                <h1>Hello Dear</h1>
                <p>
                  🎉 Welcome to our education hub! Dive into endless learning
                  opportunities, connect with peers, and grow together. Let's
                  embark on this journey of knowledge and discovery! 📚✨
                </p>
                <Button sx={{ mb: 3 }} variant="contained" onClick={()=>{goToCourses()}}>
                  View Courses
                </Button>
              </Grid>
              <Grid item xs={0} md={4} lg={4}>
                <img src="00.jpg" alt="" width={200}/>
              </Grid>
            </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12} sx={{
                display: "flex",
                gap:"10px"
              }}>
            <Grid item xs={12} md={6} lg={6}>
            <Paper
              sx={{
                paddingX: 5,
                paddingY:2,
                display: "flex",
                justifyContent:"space-between",
                alignItems:"center"
              }}
            >
            <Typography variant="h3" >
              1
            </Typography>
            <div>
            <Typography variant="h6">
                PHP
            </Typography>
            <Typography variant="body1">
                Lorem ipsum dolor sit amet consectet.
            </Typography>
            </div>
            <CircularProgress variant="determinate" value={80} />
            </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
            <Paper
              sx={{
                paddingX: 5,
                paddingY:2,
                display: "flex",
                justifyContent:"space-between",
                alignItems:"center"
              }}
            >
            <Typography variant="h3" >
              2
            </Typography>
            <div>
            <Typography variant="h6">
                CSS
            </Typography>
            <Typography variant="body1">
                Lorem ipsum dolor sit amet consectet.
            </Typography>
            </div>
            <CircularProgress variant="determinate" value={90} />
            </Paper>
            </Grid>
            </Grid>
            <Grid item xs={12} md={12} lg={12} sx={{
                display: "flex",
                gap:"10px"
              }}>
            <Grid item xs={12} md={6} lg={6}>
            <Paper
              sx={{
                paddingX: 5,
                paddingY:2,
                display: "flex",
                justifyContent:"space-between",
                alignItems:"center"
              }}
            >
            <Typography variant="h3" >
              3
            </Typography>
            <div>
            <Typography variant="h6">
                HTML
            </Typography>
            <Typography variant="body1">
                Lorem ipsum dolor sit amet consectet.
            </Typography>
            </div>
            <CircularProgress variant="determinate" value={85} />
            </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
            <Paper
              sx={{
                paddingX: 5,
                paddingY:2,
                display: "flex",
                justifyContent:"space-between",
                alignItems:"center"
              }}
            >
            <Typography variant="h3" >
              4
            </Typography>
            <div>
            <Typography variant="h6">
                JS
            </Typography>
            <Typography variant="body1">
                Lorem ipsum dolor sit amet consectet.
            </Typography>
            </div>
            <CircularProgress variant="determinate" value={95} />
            </Paper>
            </Grid>
            </Grid>
            
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h4>Comments</h4>
              <Paper
                sx={{
                  p: 2,
                  m:2,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  gap:"10px",
                  border:"1px solid gray"
                }}
              >
                <Avatar>M</Avatar>
                <div>
            <Typography variant="subtitle2">
            Mr.Ahmed
            </Typography>
            <Typography variant="caption">
            Math 101
            </Typography>
            </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt quod consectetur suscipit voluptate.
                </p>
              </Paper>
              <Paper
                sx={{
                  p: 2,
                  m:2,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  gap:"10px",
                  border:"1px solid gray"
                }}
              >
                <Avatar>M</Avatar>
                <div>
            <Typography variant="subtitle2">
            Mr.Ahmed
            </Typography>
            <Typography variant="caption">
            Math 101
            </Typography>
            </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt quod consectetur suscipit voluptate.
                </p>
              </Paper>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h4 className="m-0">What's due</h4>
              <span className="text-gray fs-1 mb-4">
                Lorem, ipsum dolor sit
              </span>
              <h5 className="m-0 align-center">
                <HourglassTopTwoToneIcon /> <span>Unit 2 quiz</span>
              </h5>
              <span className="text-gray fs-1 mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </span>
              <Button variant="outlined" onClick={startExam}>Start quiz</Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
