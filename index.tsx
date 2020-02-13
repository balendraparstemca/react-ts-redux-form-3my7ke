import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import ContactForm from './ContactForm';
import store from './store';
import './style.css';

declare global {
  interface Object {
    entries<a>(a: { [key: string]: a }): Array<Array<string | a>>;
  }
}

const submit = values => {
  console.log(values)
}

const App = () => <Provider store={store}>
  <ContactForm onSubmit={submit} />
</Provider>

render(<App />, document.getElementById('root'));
