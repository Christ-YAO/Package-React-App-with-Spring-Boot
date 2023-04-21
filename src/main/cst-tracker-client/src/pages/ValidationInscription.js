import React from "react";
import { Box, Typography } from '@mui/material';
import '../App.css';
import Typewriter from "../components/commons/Typewriter";
import DoneAllIcon from '@mui/icons-material/DoneAll';

function ValidationInscription() {
    return (
        <Box className="backImg3" bgcolor='#f8f8ff' padding='50px 0px' width='100%' minHeight='100vh' marginTop='-15px !important' margin="0 auto">
        <Typography variant='h1' color='white' fontWeight='bolder' sx={{ml:{xl:10, lg:10, md:10, sm:5, xs:5, width: '100%'}}} mt="-30px">VALIDATION</Typography>
        <Typewriter />
        <Box 
            sx={{
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 1, 
                width: {xl: '50%', md: '55%', sm: "80%", xs: "70%"},
                // padding: {xl: '30px', lg: '30px', md: '30px', sm: '20px', xs: '20px'}, 
                border: '1px solid #ff5722', 
                // borderRadius: 2, 
                position: 'relative', 
                marginBottom: 5,
                background: "#fffa",
                backdropFilter: 'blur(10px)',
                ml:{xl: 10, lg: 20, md: 10, sm: 5, xs: 2.5}
            }}>
                      <DoneAllIcon sx={{fontSize: '150px', color: '#f8f8ff', background: '#ff5722', width: '100%', borderRadius: '0 0 0% 500%'}} />
          <Box sx={{
                    width: '100%', 
                    textAlign: 'center', 
                    // background: '#ff5622e8', 
                    p: '15px', 
                    // color: '#fff',
                    fontSize: '25px',
                    }}>
                      <Typography variant='h5' sx={{mb: 3, color: '#ff5722',}}>Inscription iSwift validée avec succès</Typography>
                      <Typography variant='h4' sx={{mb: 3, fontFamily: "Courier New", fontWeight: 'bold'}}>Vos identifants vous seront transféré par Mail</Typography>
                      <marquee variant='h4' style={{mb: 3, color: '#f8f8ff', background: '#ff5722'}}>iSwift vous souhaite la bienvenue dans sa communauté</marquee>
                    </Box>
        </Box>
      </Box>
    )
}

export default ValidationInscription;