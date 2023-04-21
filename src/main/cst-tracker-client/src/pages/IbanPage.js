import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IbanData from "../components/IbanData";

export default function IbanPage() {
  const [uetrValue, setUetrValue] = useState([])
  const [input, setInput] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState(false)
  const value = (uetrValue[0])

  const handleSubmit = (event) => {
      event.preventDefault()
      setError(false)
      setUetrValue([inputValue])
      setInput([inputValue])
      // setInputValue('')

      if (inputValue === '') {
        setError(!error)
      }
    }
  
  return (
    <Container maxWidth="xl" sx={{display: {lg: 'flex'}, marginTop: '-70px' ,gap: 5}}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 500,
          width: '100%',
          height: 420,
          background: "#eee",
          display: "flex",
          justifyContent: "center",
          padding: "30px 0",
          flexWrap: "wrap",
          borderRadius: 1,
          margin: '0 auto',
          marginBottom: 2,
          "& > :not(style)": { m: 1, width: "90%" }
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="filled-basic" label="IBAN" variant="filled" required error={error} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <LocalizationProvider dateAdapter={AdapterDayjs} sx={{display: "flex", flexWrap: 'wrap',}}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker label="Date de début" format="DD-MM-YYYY" onError={error}/>
            <DatePicker label="Date de fin" format="DD-MM-YYYY"/>
          </DemoContainer>
        </LocalizationProvider>
        <Button variant="contained"  type='submit' onClick={handleSubmit}>Rechercher</Button>
        <Typography sx={{textAlign: 'center',}}>OR</Typography>
        <Button variant="contained" color="secondary" href="./uetrpage">
          Rechercher par uetr
        </Button>
      </Box>
      <IbanData inputValue={inputValue} value={value} />
    </Container>
  );
}