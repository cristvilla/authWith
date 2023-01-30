import * as React from 'react';
import { useRouter } from "next/router";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { MainListItems } from '../componentns/sidebar-items';
import { AvartarInfo } from "../componentns/dashboard/user-info";
import { mdTheme, Drawer } from '../styled/styled'
import { UserPageHeader } from "../componentns/users/user-head";
import { LoremContentTypo } from "../styled/typhos";
import UserDataTable from "../componentns/users/user-table";
import { SessionsPageHeader } from "../componentns/sessions/sessions-header";

function SessionsContent() {
  const router = useRouter()
  const path = router.pathname
  const [open, setOpen] = React.useState(true);
  const initialState = { 1: false, 2: false, 3: false, 0: false }
  const [dropdownState, setDropdownState] = React.useState(initialState)
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open} >
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
            style={{
              backgroundColor: ' #0E1218'
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider style={{
            width: '223px',
            height: '28px',
            background: 'rgba(69, 170, 97, 0.15)',
            position: 'absolute',
            top: '50px',
            zIndex: '38',
            right: '50%',
            transform: 'translate(50%)'
          }} />
          <Divider style={{
            borderColor: 'rgba(122, 136, 153, 0.28)',
            width: "230px",
            top: '109px',
            right: '50%',
            transform: 'translate(50%)',
            position: 'absolute',
            zIndex: '123',
          }} />
          <List component="nav"
            style={{
              backgroundColor: ' #0E1218',
              height: '85vh',
              color: 'rgba(187, 202, 191, 0.85)'
            }}>
            <MainListItems path={path} />
          </List>
          <AvartarInfo />
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: 'white',
            flexGrow: 1,
            overflow: 'auto',
            padding: '32px',
            paddingBottom: '0'
          }}
        >
          <SessionsPageHeader />
          <Divider sx={{
            top: '15px',
            position: 'relative',
            borderColor: 'rgba(122, 136, 153, 0.28)',
            marginBottom: '45px'
          }} />
        </Box>

      </Box>
    </ThemeProvider>
  );
}

export default function Sessions() {
  return <SessionsContent />;
}