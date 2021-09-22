import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';

import PeopleList from './components/PeopleList';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div style={{position: 'relative'}}>
      <Provider store={store}>
        <Navbar />
        <PeopleList />
      </Provider>
    </div>
  );
}

export default App;
