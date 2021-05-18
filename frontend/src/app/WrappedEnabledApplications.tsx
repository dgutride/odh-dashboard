import React, { useState, useEffect } from 'react';
import { store } from '../redux/store/store';
import { Provider } from 'react-redux';

const InstalledApplications = React.lazy(
  () => import('../pages/enabledApplications/EnabledApplications'),
);

const WrappedEnabledApplications: React.FC = () => (
  <Provider store={store}>
    <InstalledApplications />
  </Provider>
);

export default WrappedEnabledApplications;
