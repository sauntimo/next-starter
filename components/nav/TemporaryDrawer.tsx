import React, { ReactElement } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

import Link from 'next/link';

const useStyles = makeStyles(() => createStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

interface props {
  open: boolean,
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void,
}

interface NavItem {
  title: string,
  path: string,
  icon: string,
  dividerAfter?: boolean,
}

const nav: NavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: 'home',
    dividerAfter: true,
  },
  {
    title: 'About',
    path: '/about',
    icon: 'face',
  },
  {
    title: 'Users List',
    path: '/users',
    icon: 'people',
  },
  {
    title: 'Greet API',
    path: '/greet',
    icon: 'code',
  },
];

const TemporaryDrawer: React.FC<props> = ({ open, toggleDrawer }: props): ReactElement => {
  const classes = useStyles();

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {nav.map((navItem) => (
          <>
            <Link href={navItem.path}>
              <a>
                <ListItem button key={navItem.title}>
                  <ListItemIcon>
                    <Icon>{navItem.icon}</Icon>
                  </ListItemIcon>
                  <ListItemText>{navItem.title}</ListItemText>
                </ListItem>
              </a>
            </Link>
            {navItem.dividerAfter && <Divider />}
          </>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key="left">
        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default TemporaryDrawer;
