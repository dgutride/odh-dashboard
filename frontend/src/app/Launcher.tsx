import React, { useState, useEffect } from 'react';
import { store } from '../redux/store/store';
import { Provider } from 'react-redux';
// import ConnectedLauncher from './Launcher';
// import { getComponents } from '../redux/actions/actions';
// import { connect } from 'react-redux';
const LearningCenterPage = React.lazy(() => import('../pages/learningCenter/LearningCenter'));

const WrappedLauncher: React.FC = () => (
  <Provider store={store}>
    <LearningCenterPage />
  </Provider>
);

export default WrappedLauncher;
