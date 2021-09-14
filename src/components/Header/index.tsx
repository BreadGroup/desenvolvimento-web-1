import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  AppBar,
  Drawer,
  DrawerHeader,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from './style';

export interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface Props {
  children: React.ReactElement;
}

function HideOnScroll({ children }: Props) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const menuInfo = [
    {
      label: 'Home',
      icon: <HomeOutlinedIcon />,
      path: '/',
    },
    {
      label: 'Contact us',
      icon: <ConnectWithoutContactOutlinedIcon />,
      path: '/contactus',
    },
    {
      label: 'About us',
      icon: <InfoOutlinedIcon />,
      path: '/aboutus',
    },
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box component="header">
      <CssBaseline />
      <HideOnScroll>
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              {document.title}
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <HideOnScroll>
            <Typography variant="h6">Agrotóxicos</Typography>
          </HideOnScroll>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuInfo.map((menuItem) => {
            return (
              <ListItemButton
                to={menuItem.path}
                component={RouterLink}
                key={menuItem.label}
              >
                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                <ListItemText primary={menuItem.label} />
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
}
