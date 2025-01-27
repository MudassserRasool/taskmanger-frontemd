import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';
import { store } from './redux/store';
import { ThemeProvider } from './theme/ThemeContext';
const hideSpinner = () => {
  const spinner = document.getElementById('loading');
  if (spinner) {
    spinner.style.display = 'none';
  }
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
hideSpinner();
