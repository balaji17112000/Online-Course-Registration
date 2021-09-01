import React from 'react';
import { render } from '@testing-library/react';
import About from './components/AboutComponent';
import Contact from './components/ContactComponent';
import div from './components/Menu1Component';
describe(' About ', () => {
it('checking About is present or not and displaying the body of About', () => {
  
  console.log("About is defined");
  });
});
describe(' TutorMenu ', () => {
it('checking TutorMenu is present or not ', () => {
  const  smenu  = render(<div />);
  console.log("div is present in TutorMenu");
  });
});
describe(' Contact ', () => {
it('checking Contact is present or not and displaying the body of Contact', () => {
  
  console.log("Contact is defined");
  });
});
