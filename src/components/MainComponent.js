
import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {



    render() {
        const HomePage = () => {
            return(
                <Home
                />
            );
          }



        return (
            <div>
                <Header />
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path="/menu" component={() => <Menu  />} />
                        <Route exact path="/contactus" component={Contact} />
                        <Route exact path="/aboutus" component={() => <About  />} />
                        <Redirect to="/home" />
                    </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;


