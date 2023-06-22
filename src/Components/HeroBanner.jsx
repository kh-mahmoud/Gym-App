import React from 'react';
import { Stack,Box,Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Herobanner from '../assets/images/banner.png';
import '../App.css';
import Typed from 'react-typed';

 


const HeroBanner = () => {
  return (
    <Box pl={"50px"} sx={{ mt: { lg: '200px', xs: '70px' }}}>
       <Typography color="#3b5690" fontWeight="600" fontSize="26px">Fitness Club</Typography>
        <Typography fontWeight={700} sx={{maxWidth:'678px',height:'150px',display:"flex",flexWrap:'wrap' ,fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        <Typed
            strings={['Transform your body,transform your life','Push harder, go further, succeed','Empower your body, empower your mind','Achieve your goals, exceed your limits']}
            typeSpeed={50}
            backSpeed={30}
            loop={true}
          />
        </Typography>
        <Typography mb={6} fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
        Check out the most effective exercises personalized to you
        </Typography>

        <Button href='#exercises' variant="contained"
         sx={{background:"#3b5690","&:hover":{background:"#3b5690"},width:'200px',padding:"14px"}}>
            EXPLORE EXERCISES
        </Button>
         <Typography fontWeight={600} color="#3b5690" sx={{ opacity: '0.2', display: { lg: 'block', xs: 'none' }, fontSize: '200px'}}>
            Exercise
         </Typography>
        <img src={Herobanner} className='hero_image absolute top-0 mt-[100px] h-[700px] w-[600px] right-5' alt="Hero" />
    </Box>
  )
}

export default HeroBanner