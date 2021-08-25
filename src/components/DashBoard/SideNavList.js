import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Box,
  Typography,
  Avatar,
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
import prashant from '../../assets/prashant.png';

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
  topBar: {
    margin: theme.spacing(0.8),
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.6em',
      borderRadius: '20px',
      'scrollbar-width': 'thin',
      height: '4px',
    },
    '*::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0, 0.5)',
      outline: '1px solid slategrey',
    },
  },
  profileTypoName: {
    color: '#FFFFFF',
    fontSize: '20px !important',
    marginTop: theme.spacing(1.5),
    fontWeight: '500',
  },
  profileTypoEmail: {
    fontSize: '13px',
    color: '#94A3B8',
    marginTop: theme.spacing(0.8),
    fontWeight: 500,
  },
  bottomLine: {
    color: '#FFFFFF',
    marginTop: theme.spacing(4),
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
        className={classes.topBar}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Avatar
            src="https://www.renaultgroup.com/wp-content/uploads/2021/03/nouveau_logo_renault_banner.jpg"
            alt="logo"
          />
        </Box>
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
            src={prashant}
            alt="logo"
            // className={classes.profileImageLogo}
            className={classes.profileImage}
          />
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography className={classes.profileTypoName}>
          Prashant Khanal
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography className={classes.profileTypoEmail}>
          prashantkhanal32@gmail.com
        </Typography>
      </Box>
      <Box>
        <hr className={classes.bottomLine} />
        <Button onClick={() => handleDrawerClose()} className={classes.navBtn}>
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
