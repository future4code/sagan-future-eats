import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

export function MyBottonNav(props) {

  return (
    <BottomNavigation value={props.value} onChange={props.onNavChange}>
      <BottomNavigationAction label="Recents" value="home" icon={} />
      <BottomNavigationAction label="Favorites" value="cart" icon={} />
      <BottomNavigationAction label="Nearby" value="profile" icon={} />
    </BottomNavigation>
  )
}

/* src={require('../img/logo2.png')} */