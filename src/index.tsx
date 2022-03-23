import React from 'react';
import { render } from 'react-dom';

import { App } from 'App';
import { GlobalStyle } from 'assets/style/globalStyle';
import reportWebVitals from 'reportWebVitals';

render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
