import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GamesPage from './features/games/GamesPage';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Grid } from '@mui/material';
import SideNav from './components/sidenav/SideNav';
import LoginPage from './features/auth/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer theme='colored' position='bottom-right' />
      <Grid container>
        <Grid item md={3} xs={6} style={{
          display: "flex",
          justifyContent: "center",
          background: "linear-gradient(45deg, #4287f5, #16c7b2)",
          minHeight: "100vh"
        }}>
          <SideNav/>
        </Grid>
        <Grid item md={9} xs={6}>
          <Routes>
            <Route path="/" element={<GamesPage/>} />
            <Route path="/login" element={<LoginPage/>} />
          </Routes>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
