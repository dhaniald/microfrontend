'use client'
import { Button, Container, CssBaseline, IconButton, Link, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const MENUS = [
  {
    name: 'Technology'
  },
  {
    name: 'Design'
  },
  {
    name: 'Culture'
  },
  {
    name: 'Politics'
  },
  {
    name: 'Business'
  },
  {
    name: 'Openion'
  },
  {
    name: 'Science'
  },
  {
    name: 'Health'
  },
  {
    name: 'Style'
  },
  {
    name: 'Travel'
  }
 
] //Array Of objects
export default function page() {
  const themeObject=createTheme()
  return (
    <ThemeProvider theme={themeObject}>
      <CssBaseline/>
      <Container  maxWidth='lg'>
        <Toolbar>
          <Button variant='outlined' size="large">Subscribe</Button>
          <Typography align='center' variant='h5'
          component='h2' noWrap sx={{flex:1}}> MyBlog </Typography>
           <IconButton>
            <SearchIcon/>
           </IconButton>
           <Button variant='outlined' size="small">SignUp</Button>
        </Toolbar>
        <Toolbar component='nav'>
         { MENUS.map((cv,index,arr)=>{
            return  <Link key={index} href="#" sx={{ p: 3 }}>{cv.name}</Link>
          })
          }   
          </Toolbar>
      </Container>
    </ThemeProvider>
  )
}
