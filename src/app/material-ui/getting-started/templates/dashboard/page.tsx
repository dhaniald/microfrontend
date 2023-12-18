'use client'
import React from 'react';
import { AppBar, Box, CssBaseline, Grid, ListItem, ThemeProvider, Typography, createTheme } from '@mui/material';


 function Dashboard() {
   const themeObject= createTheme();
  
 
  return (
    <ThemeProvider theme={themeObject}>
      <CssBaseline />
  <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={4}>
        <Box className='g_tbdr Box1' height='50px'>
            Box1
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box className='g_tbdr Box2' height='50px'>
            Box2
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box className='g_tbdr Box3' height='50px'>
            Box3
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box className='g_tbdr Box1' height='50px'>
            Box1
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box className='g_tbdr Box2' height='50px'>
            Box2
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box className='g_tbdr Box3' height='50px'>
            Box3
          </Box>
        </Grid>
        
      </Grid>
       
    <AppBar position='absolute'>Gaurav</AppBar>
      <Typography sx={{mt:4}}>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
               </Typography>
    </ThemeProvider>
  )
}
export default Dashboard;