import PropTypes from 'prop-types';
import React from 'react';

const Sidenav = ({ isLoggedIn }) => (
  <>
    <p>Sidenav!</p>
    {isLoggedIn && <p>Logged in</p>}
  </>
);
Sidenav.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Sidenav;
