
import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron ,Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Login from './login';
import firebase from 'C:/ooad/src/config/firebase';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,


        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);


    }



    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal() {
            this.setState({
              isModalOpen: !this.state.isModalOpen
       
            });
            
          }


    render() {

        return(
            <div>

                <Navbar dark expand="md">
                    <div className="container">

                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="images/logo1.png" height="50" width="50"
                                alt="AB ACADEMY" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                               <NavItem>
                                   <Button outline onClick={this.toggleModal} > <span className="fa fa-sign-in fa-lg " ></span>   LogIn/LogOut  </Button>
                               </NavItem>
                           </Nav>
                        </Collapse>

                    </div>
                </Navbar>

                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <img src='images/logo2.png' height="100" width="300"></img>
                                <p>We take inspiration from the World's best course organisation, and create a unique , experienced,knowledged students.</p>
                                <h2>HAPPY LEARNING</h2>
                            </div>
                            <div className="col-12 col-sm-3 ">
                            </div>
                            <div className="col-12 col-sm-3 ">
                              <img src='images/ooad1.jpg' height="200" width="200" ></img>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>

                    <ModalHeader toggle={this.toggleModal} >Login</ModalHeader>

                    <ModalBody>
            						

                        <Login  />
                        
                        </ModalBody>
                        </Modal>
            </div>
        );
    }
}

export default Header;
