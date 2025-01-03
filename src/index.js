import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ShopcontextProvider from './context/ShopContext';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import {store} from "../src/Redux/Store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShopcontextProvider>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ShopcontextProvider>
  </React.StrictMode>
);

