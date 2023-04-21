import React, { useState } from 'react';
import { Box, Link, Typography } from '@mui/material';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from '../data/Data.js';
import Typewriter from '../components/commons/Typewriter.jsx';
import Header from '../components/header'

function App() {
  const [clients, setClients] = useState(data);
  console.log(clients)
  const [search, setSearch] = useState('');
  return (
    <Box sx={{position: 'relative',}}>
    <Header />
      <Box className="backImg3" width='100%' minHeight='100%' marginTop='-20px !important' margin="0 auto" sx={{position: "absolute", zIndex: "-1", filter: "brightness(50%)"}}></Box>
      <Box padding='50px 0px' width='100%' minHeight='100vh' marginTop='-20px !important' margin="0 auto" sx={{zIndex: "10"}}>
      {/* <h1 style={{color: '#fff', width: '100%', fontSize: '17px', fontWeight: 'bold', padding: '0px 0px 10px', marginBottom: '-20px', marginTop: '-40px', marginLeft: '40px',}}>Liste de vos banques</h1> */}
      <br />
      <Typography variant='h1' color='white' fontWeight='bolder' ml="75px" mt="-10px" sx={{color: "#f8f8ff"}}>mes banques</Typography>
      <Typewriter />
      <Box 
        sx={{
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 1, 
            maxWidth: '100vw', 
            width: {xl: '60%', md: '95%', sm: "98%", xs: "98%"}, 
            background: '#fffd', 
            padding: {xl: '5px 40px', lg: '50px', md: '50px', sm: '40px', xs: '20px'}, 
            border: '5px solid #f8f8ff', 
            borderRadius: 1,
            ml: 5
        }}>
        {/* <Form> */}
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search'
            />
          </InputGroup>
        {/* </Form> */}
        <Table style={{maxWidth: '100%'}} striped /*bordered*/ hover>
          <thead>
            <tr>
              <th>N° de Compte</th>
              <th>Banque</th>
              <th>Pays</th>
              <th>Ville</th>
            </tr>
          </thead>
          <tbody>
            {clients
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.bank.toLowerCase().includes(search) || item.account.includes(search);
              })
              .map((item) => (
                <tr key={item.id}>
                  <td style={{minWidth: 200}}>{item.account}</td>
                  <td style={{width: 400}}><Link href='/transactions'>{item.bank}</Link></td>
                  <td style={{width: 150}}>{item.country}</td>
                  <td>{item.city}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Box>
    </Box>
    </Box>
  );
}

export default App;
