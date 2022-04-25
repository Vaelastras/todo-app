import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/index';
import './index.scss';
// eslint-disable-next-line import/no-named-as-default
import App from './components/App/App';

const root = createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);
