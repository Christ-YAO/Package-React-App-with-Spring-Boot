import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import AnalyticsIcon from '@mui/icons-material/Analytics';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import Header from '../header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UetrPage from '../../pages/UetrPage'
import Error from '../Error'
import Link from '@mui/material/Link';
// import Dashboard from '../../pages/Dashboard';
import TransEntr from '../../pages/TransactionsEntrantes';
import TransSort from '../../pages/TransactionsSortantes';
import Transactions from '../../pages/Transactions';
import Inscription from '../../pages/Inscription';
import ValidationInscription from '../../pages/ValidationInscription';
import RegisterBankSteps from '../../pages/RegisterBankSteps';
// import RegisterIndiv from '../../pages/RegisterIndiv';
// import RegisterGroup from '../../pages/RegisterGroup';
// import Demandes from '../../pages/Demandes';
// import Select from '../../pages/Select';
import BankList from '../../pages/BankList';
import RegisterBank from '../../pages/RegisterBank';
import Loader from '../Loader';
import ExpandLess from '@mui/icons-material/ExpandLess';
import Collapse from '@mui/material/Collapse';
import ListItemIcon from '@mui/material/ListItemIcon';

import Logo from "../commons/Logo";
import DemandeValidation from '../../pages/DemandeValidation';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



export default function Sidebar({data, isLoading}) {
  const theme = useTheme();
  const [sideOpen, setSideOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setSideOpen(true);
  };

  const handleDrawerClose = () => {
    setSideOpen(false);
  };

  const [toggle, setToggle] = React.useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };


  return <Box sx={{width: '100%'}}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={sideOpen}>
        <Toolbar sx={{background: "#ff5722"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(sideOpen && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>

          {/*================= Header =================*/}
          <Header />

        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={sideOpen}>
        <DrawerHeader>
          <Logo />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>

        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton onClick={handleClick}
                    sx={{
                      minHeight: 48,
                      justifyContent: sideOpen ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <AccountBalanceIcon
                      sx={{
                        minWidth: 0,
                        mr: sideOpen ? 1 : 'auto',
                        justifyContent: 'center',
                      }}
                    />
                      <ListItemText sx={{ opacity: sideOpen ? 1 : 0 }} >Mes Banques</ListItemText>
                      {sideOpen ? <ExpandLess /> : null}
                </ListItemButton>
                    <Collapse in={toggle && sideOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding >
                        <Link href="/bank_list" sx={{color: '#444', textDecoration: 'none'}}>
                          <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon sx={{mr: '-25px'}}>
                              <ArrowForwardIosIcon fontSize='10px' />
                            </ListItemIcon>
                            <ListItemText primary="Liste" />
                          </ListItemButton>
                        </Link>
                      </List>
                    </Collapse>
                    <Collapse in={toggle && sideOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding >
                        <Link href="/register_bank" sx={{color: '#444', textDecoration: 'none'}}>
                          <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon sx={{mr: '-25px'}}>
                              <ArrowForwardIosIcon fontSize='10px' />
                            </ListItemIcon>
                            <ListItemText primary="Ajouter" />
                          </ListItemButton>
                        </Link>
                      </List>
                    </Collapse>
            <Link href="/transactions" sx={{color: '#444', textDecoration: 'none'}}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: sideOpen ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ReceiptLongIcon
                      sx={{
                        minWidth: 0,
                        mr: sideOpen ? 1 : 'auto',
                        justifyContent: 'center',
                      }}
                    />
                    <ListItemText sx={{ opacity: sideOpen ? 1 : 0 }} >Mes Transactions</ListItemText>
                    
                  </ListItemButton>
            </Link>
          </ListItem>
              
          
        </List>
      </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 0, marginTop: '70px'}}>
          {/* <Header /> */}
            <DrawerHeader />
            <Box paragraph 
                sx={{
                  paddingTop: 4, 
                  minHeight: '100vh', 
                  overflowX: 'none', }}>
              {/* =============React-Router-DOM============= */}
              {isLoading ? (
                <Box marginTop='15%'>
                  <Loader />
                </Box>
              ) : (
                <Router>
                    <Routes>
                        <Route path='/uetrpage/:uetr' element={<UetrPage  />} />
                        <Route path='/*' element={<Error />} /> 
                        <Route path='/transactions' element={<Transactions />} />
                        <Route path='/bank_list' element={<BankList />}></Route>
                        {/* <Route path='/register_bank' element={<RegisterBank />} /> */}
                        <Route path='/' element={<Inscription />} />
                        <Route path='/inscription_validee' element={<ValidationInscription />} />
                        <Route path='/register_bank' element={<RegisterBankSteps />} /> 
                        <Route path='/demande_validation' element={<DemandeValidation /> } /> 
                    </Routes>
                </Router>
              )}
            </Box>
        </Box>
    </Box>
            {/*================= Footer =================*/}
            {/* <Footer /> */}
  </Box>
}