import React from 'react';
import Box from "@mui/material/Box";

function IbanData({inputValue, value}) {
    
    if (inputValue === '') {
        return '';
    } else if (inputValue === value) {
        return <>
        <hr />
        <Box
            sx={{
              width: '100%',
              height: '100%',
              background: "lightgray",
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              gap: 3,
              borderRadius: 1,
              margin: '0 auto',
              "& > :not(style)": { width: "90%" }
            }}
            noValidate
            autoComplete="off"
          >
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        fontSize: 14,
                        height: 50,
                        p: '10px 20px',
                        margin: '0 auto',
                        borderRadius: 1,
                        bgcolor: "#eee"
                    }}>
                        <span style={{fontSize: '18px'}}>UETR</span>
                        <span style={{fontSize: '18px'}}>08 MAR 2023-10:30 PDT</span>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        fontSize: 14,
                        height: 50,
                        p: '10px 20px',
                        margin: '0 auto',
                        borderRadius: 1,
                        bgcolor: "#eee"
                    }}>
                        <span style={{fontSize: '18px'}}>UETR</span>
                        <span style={{fontSize: '18px'}}>08 MAR 2023-10:30 PDT</span>
                    </Box>
          </Box></>
      }
    
}

export default IbanData;