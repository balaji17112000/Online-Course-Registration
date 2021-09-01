
import React, { Component } from 'react';
import Home1 from './Home1Component';
import Menu1 from './Menu1Component';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main1 extends Component {



    render() {
        const HomePage = () => {
            return(
                <Home1
                />
            );
          }



        return (
            <div>
                <Header />
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path="/menu" component={() => <Menu1  />} />
                        <Route exact path="/contactus" component={Contact} />
                        <Route exact path="/aboutus" component={() => <About  />} />
                        <Redirect to="/home" />
                    </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main1;


