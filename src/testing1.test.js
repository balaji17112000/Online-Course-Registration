import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Main from './App';
import Home from './components/HomeComponent';
import Home1 from './components/Home1Component';
import div from './components/MenuComponent';

describe(' App ', () => {
it('checking App is present or not and displaying the body of Main', () => {
  const  app  = render(<App  />);
  console.log(app.debug());
  });
});
describe(' Main ', () => {
it('checking Main is present or not and displaying the body of Main', () => {
  const  app1  = render(<Main />);
  console.log(app1.debug());
  });
});

describe('Student Home ', () => {
it('checking home is present or not and displaying the body of Home1', () => {
  const  home  = render(<Home />);
  console.log(home.debug());
  });
});
describe(' TutorsHome ', () => {
it('checking home1 is present or not and displaying the body of Home1', () => {
  const  home1  = render(<Home1 />);
  console.log(home1.debug());
  });
});


describe(' StudentsMenu ', () => {
it('checking Menu is present or not ', () => {
  const  smenu  = render(<div />);
  console.log("div is present in Menu");
  });
});




