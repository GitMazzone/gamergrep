import React from 'react';

import Sidenav from './Sidenav';

export default {
  title: 'Components/Sidenav',
  component: Sidenav,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Sidenav {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  isLoggedIn: true,
  label: 'Logged In',
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  isLoggedIn: false,
  label: 'Logged Off',
};
