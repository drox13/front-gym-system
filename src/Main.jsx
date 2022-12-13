import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { PrincipalRoute } from './components/Routers/PrincipalRoute';
import { store } from './store/store';
import AppTheme from './theme/AppTheme';

const  App = () =>{
  return (
   <AppTheme>
      <Provider store = {store}>
        <BrowserRouter>
          <PrincipalRoute/>
        </BrowserRouter>
      </Provider>
   </AppTheme>
  );
}

export default App;
