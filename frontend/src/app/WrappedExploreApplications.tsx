import React, { useState, useEffect } from 'react';
import { store } from '../redux/store/store';
import { Provider } from 'react-redux';
// import ConnectedLauncher from './Launcher';
// import { getComponents } from '../redux/actions/actions';
// import { connect } from 'react-redux';

// const InstalledApplications = React.lazy(
//   () => import('../pages/enabledApplications/EnabledApplications'),
// );
const ExploreApplications = React.lazy(
  () => import('../pages/exploreApplication/ExploreApplications'),
);

const WrappedExploreApplications: React.FC = () => (
  <Provider store={store}>
    <ExploreApplications />
  </Provider>
);

export default WrappedExploreApplications;
