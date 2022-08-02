import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import { render } from 'react-dom';

import { App } from 'App';
import { ErrorBoundary } from 'components/ErrorBoundary';
import reportWebVitals from 'reportWebVitals';
import { GlobalStyle } from 'style/globalStyle';

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
