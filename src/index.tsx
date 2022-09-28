import '@app/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from "react-query";
import reportWebVitals from '@app/reportWebVitals';
import {CurrencyProvider} from "@app/Context/Currency/Provider";
import App from '@app/App';

const el = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(el!);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CurrencyProvider>
        <App />
      </CurrencyProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
