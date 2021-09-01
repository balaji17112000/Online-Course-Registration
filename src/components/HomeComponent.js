
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,  CardHeader, Media, Button,Col,Row,Modal, ModalHeader, ModalBody, Form } from 'reactstrap';
import fire from 'firebase' ;
import {db,auth} from '../config/firebase';

class Home extends Component {
	constructor(props){
        super(props);
        this.state={
			
			users: null
			
        };
		
    }
  
  componentWillMount(){
  
	
		db.collection('users')
		.get()
		.then( snapshot => {
			const users =[]
			snapshot.forEach( doc =>{
			const data = doc.data()
			users.push(data)
			})
			this.setState({users: users})
		})
}
  render(){

    return(
      <div className="container">
	  <div className="col-12 col-sm" align="center">
      <card>
        <img src='images/welcome.png' height="100" width="200"></img>
        </card>
        </div>
		<p>{this.state.users &&
							this.state.users.map(user1 =>{
							return(
							<Row className="form-group">
							<Col md={{size:10, offset: 2}}>
							<card>
							<div key={user1.name} className="col-12 col-sm mt-5">
								
									<Media body className="col-12 col-sm-6">
										<Media heading>PERSONAL DETAILS</Media>
										<p><b>STUDENT         </b> : {user1.Name}</p>
										<p><b>STUDENT AGE    </b>  : {user1.Age}</p>				
										<p><b>STUDENT ADRESS</b>   : {user1.Address}</p>
										<card>
										<p><b>Skills</b> 		   : {user1.Skills[0]}</p>
										<Col md={{size:10},{offset:2}}>
										<p> {user1.Skills[2]}</p>
										<p> {user1.Skills[3]}</p>
										<p> {user1.Skills[4]}</p>	
										</Col>
										</card>
										<p><b>INTREST</b> : {user1.Interest}</p>
										<p><b>PHONE NUMBER</b> : {user1.Phone_number}</p>
										<p><b>QUALIFICATION</b> : {user1.Qualification}</p>
									    <p><b>INTREST</b> : {user1.Interest}</p>
								</Media>
								
								<hr />
							</div>
							</card>
							</Col>
							</Row>
							)	
							})}</p>
	  </div>
    );
}
}

export default Home;
