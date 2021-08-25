import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Box,
  Drawer,
  Typography,
} from '@material-ui/core';

import {
  Bookmark,
  Dashboard,
  ExitToApp,
  Home,
  Person,
  PhotoCamera,
  Settings,
  Storefront,
  TabletMac,
} from '@material-ui/icons';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { NavLink } from 'react-router-dom';
import SubMenu from './SubMenu';

const useStyles = makeStyles((theme) => ({
  icons: {
    fontSize: '14px',
  },
  navLinks: {
    margin: '10px 0px',
    '& div': {
      color: '#FFFFFF',
      fontSize: '14px',
      textTransfrom: 'capitalize',
    },
    [theme.breakpoints.up('md')]: {
      ' &:hover, &:hover div': {
        backgroundColor: '#2C3344',
        color: '#FFFFFF',
        borderRadius: '8px',
        // height: '50%',
      },
    },
  },
  topBarLogoIcons: {
    color: '#ffffff',
  },
  navBtn: {
    textTransform: 'capitalize',
    display: ' contents',
    width: '100%',
    marginTop: theme.spacing(5),
  },
  typo: {
    fontSize: '14px',
    marginRight: theme.spacing(2),
  },
  activeNavLinks: {
    color: '#ffffffff',
    backgroundColor: '#2C3344',
    borderRadius: '8px',
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
  },
  profileImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
  },
  profileImageLogo: {
    width: '100%',
    height: '100%',
  },
  topBarLogo: {
    margin: theme.spacing(2),
  },
}));

const SideNavList = ({ handleDrawerClose }) => {
  const data = [
    {
      label: 'DashBoard',
      link: '/',
      icon: <Dashboard />,
    },
    {
      label: 'Bookmark',
      link: '/blog',
      icon: <Bookmark />,
    },
    {
      label: 'Home',
      link: '/home',
      icon: <Home />,
    },
    {
      label: 'Person',
      link: '/person',
      icon: <Person />,
    },
    {
      label: 'Settings',
      link: '/setting',
      icon: <Settings />,
    },
    {
      label: 'Storefront',
      link: '/store',
      icon: <Storefront />,
    },
    {
      label: 'Tablet',
      link: '/tablet',
      icon: <TabletMac />,
    },
    {
      label: 'PhotoCamera',
      link: '/photo',
      icon: <PhotoCamera />,
    },
    {
      label: 'Logout',
      link: '/logout',
      icon: <ExitToApp />,
    },
  ];
  const classes = useStyles();
  return (
    <>
      {/* //*------------->Logo---------------> */}
      <Box
        className={classes.topBarLogo}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <img
          src="http://angular-material.fusetheme.com/assets/images/logo/logo.svg"
          alt="logo"
        />

        <Box
          display="flex"
          alignItems="center"
          className={classes.topBarLogoIcons}
        >
          <Brightness4Icon />
          <SubMenu />
        </Box>
      </Box>

      <Box className={classes.profile}>
        <Box>
          {/* <img src={prashant} alt="logo" className={classes.profileImageLogo} /> */}
          <img
            src="https://media.istockphoto.com/photos/closeup-portrait-of-his-he-nice-attractive-glad-cheerful-cheery-guy-picture-id1256127007?s=612x612"
            alt="logo"
            // className={classes.profileImageLogo}
            className={classes.profileImage}
          />
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h6">Prashantkhfddfdffddl</Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h6">Prashantkhanal</Typography>
      </Box>
      <Drawer color="white" />
      <Box>
        <Button
          // size="small"
          onClick={() => handleDrawerClose()}
          className={classes.navBtn}
        >
          <List>
            {data.map((item, i) => (
              <ListItem
                exact
                component={NavLink}
                to={item.link}
                key={i}
                className={classes.navLinks}
                activeClassName={classes.activeNavLinks}
                // activeNavLinks={classes.activeNavLinks}
              >
                <ListItemIcon className={classes.icons}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText className={classes.typo}>
                  {item.label}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Button>
      </Box>
    </>
  );
};

export default SideNavList;
