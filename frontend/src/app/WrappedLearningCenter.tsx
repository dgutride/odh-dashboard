import React, { useState, useEffect } from 'react';
import { store } from '../redux/store/store';
import { Provider } from 'react-redux';

const LearningCenter = React.lazy(() => import('../pages/learningCenter/LearningCenter'));

const WrappedLearningCenter: React.FC = () => (
  <Provider store={store}>
    <LearningCenter />
  </Provider>
);

export default WrappedLearningCenter;
