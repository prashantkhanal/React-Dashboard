import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  icons: {
    color: '#ffffffff',
  },

  navLinks: {
    color: '#555',
    '& div': {
      padding: '5px 0px',
    },
    [theme.breakpoints.up('md')]: {
      ' &:hover, &:hover div': {
        backgroundColor: '#000',
        color: '#ffffffff',
        borderRadius: '7px',
      },
    },
    activeNavLinks: {
      color: '#ffffffff',
      backgroundColor: '#000',
      borderRadius: '7px',
      [theme.breakpoints.down('sm')]: {
        backgroundColor: ' rgba(0, 0, 0, 0.296)',
      },
    },
  },
}));

const SideNavList = () => {
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
    <List>
      {data.map((item, i) => (
        <ListItem
          exact
          component={NavLink}
          to={item.link}
          key={i}
          className={classes.navLinks}
          activeClassName={classes.activeNavLinks}
        >
          <ListItemIcon className={classes.icons}>{item.icon}</ListItemIcon>
          <ListItemText>{item.label}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default SideNavList;
