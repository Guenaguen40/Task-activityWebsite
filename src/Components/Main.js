import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@mui/material/Button';
import css from './Style.css'
import { useNavigate } from 'react-router-dom'



function Main() {
  const navigate = useNavigate()
  return (
    <div className="slideshow-background">
      <header className="App-header ">
      <Typography variant="h2">Welcome to task.it</Typography>
      <Typography variant="h2">Task Management App</Typography>
      <div className="row">
      <Button variant="contained" onClick={() => navigate('/login')}className="Button" >Login</Button>
      <Button variant="contained" onClick={() => navigate('/register')} className="Button" >Get Started</Button>
      </div>
      </header>
      </div>
  );
}

export default Main;
