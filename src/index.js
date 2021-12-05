import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain={domain}
    clientId={clientId}
    redirectUri="https://61ac920521ea5b00080e3df7--epic-newton-b61cb7.netlify.app/#/">
    <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
