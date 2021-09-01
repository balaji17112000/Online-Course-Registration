import React,{Component} from 'react';
import firebase from 'C:/ooad/src/config/firebase';
import Main from './components/MainComponent';
import Main1 from './components/Main1Component';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {  Button , Modal } from 'reactstrap';

class App extends Component{
	constructor(props){
        super(props);
        this.state={
			isModalOpen1: false,
			isModalOpen2: false
			
			
        };
		this.toggleModal1 = this.toggleModal1.bind(this);
		this.toggleModal2 = this.toggleModal2.bind(this);
    }

 componentDidMount(){
	 firebase.auth().onAuthStateChanged(function(user){
    if (user) {
    console.log(" user" , user)
    
             
    } 
    })
	
 }
toggleModal1() {
            this.setState({
              isModalOpen1: !this.state.isModalOpen1

            });
          }
toggleModal2() {
            this.setState({
              isModalOpen2: !this.state.isModalOpen2

            });
          }
  render()
  {
  return (
    <BrowserRouter>
						<img src="https://login.gov/assets/img/login-gov-600x314.png" width="100%" height= "100%" ></img>
					 <div className="App centered1">
					 <Button type="submit" color="primary"onClick={this.toggleModal1} ><b>&nbsp;&nbsp;STUDENTS &nbsp; &nbsp;&nbsp;&nbsp;</b> </Button>
					 <hr />
					 <Button type="submit" color="dark" onClick={this.toggleModal2}><b>&nbsp;&nbsp;INSTRUCTOR&nbsp;&nbsp;</b> </Button>
						<Modal  width="100%" height= "100%" isOpen={this.state.isModalOpen1} toggle={this.toggleModal1} contentClassName="custom-modal-style ">
												<Main  />
												
											</Modal>
						<Modal  width="100%" height= "100%" isOpen={this.state.isModalOpen2} toggle={this.toggleModal2} contentClassName="custom-modal-style ">
												<Main1 />
											</Modal>
						 
	</div>
	 </BrowserRouter>

  );

}

}


export default App;
