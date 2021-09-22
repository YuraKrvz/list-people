import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';
import Container from 'react-bootstrap/Container';
//
import PeopleList from './components/PeopleList';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Container className="bg-light d-flex justify-content-center">
      <Provider store={store}>
          <Navbar />
          <PeopleList />
        
      </Provider>
    </Container>
  );
}

export default App;
