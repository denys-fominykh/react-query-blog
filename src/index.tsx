import React from 'react';
import { render } from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { App } from 'App';
import { GlobalStyle } from 'assets/style/globalStyle';
import { ErrorBoundary } from 'components/ErrorBoundary';
import reportWebVitals from 'reportWebVitals';

const queryClient = new QueryClient();

render(
  <React.StrictMode>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyle />
        <App />
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
