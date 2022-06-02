import './App.css';
import Headers from "./Components/Header"
import SubHeading from './Components/SubHeading';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Filter from "./Components/SideComponents/filter"
import Sort from './Components/MainComponent/sort';

function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <Headers />
      <SubHeading />
      <br/>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={2.5}>
            <Item>
              <Filter />
            </Item>
          </Grid>
          <Grid item xs={9.5}>
            <Item>
              <Sort />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default App;
