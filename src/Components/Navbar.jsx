import React from 'react';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';
import '../App.css'

const Navbar = () => {
  return (
    <Stack className='Navbar' direction={"row"} 
    sx={{display:"flex",gap: { sm: '115px', xs: '50px' }, mt: { sm: '32px', xs: '20px' } }} px="30px"
    >
          <Link to="/">
              <img src={Logo} alt="Logo" />
          </Link>
          <Stack
            direction={"row"}
            fontFamily="Alegreya"
            fontSize="24px"
            alignItems={"center"}
          >
                <Link  style={{textDecoration:"none",color:"#3A1212",borderBottom: '3px solid #3b5690',marginRight:'35px'}} to='/'>Home</Link>
                <a href="#exrcises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
          </Stack>
    </Stack>
  )
}

export default Navbar