import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,  CardHeader, Media, Button,Col,Row,Modal, ModalHeader, ModalBody, Form } from 'reactstrap';
import fire from 'firebase' ;
import {db,auth} from '../config/firebase';

class Home1 extends Component {
	constructor(props){
        super(props);
        this.state={
			
			tutor: null
			
        };
		
    }
  
  componentWillMount(){
  
	
		db.collection('tutor')
		.get()
		.then( snapshot => {
			const tutor =[]
			snapshot.forEach( doc =>{
			const data = doc.data()
			tutor.push(data)
			})
			this.setState({tutor: tutor})
		})
}
  render(){

    return(
      <div className="container" align="self-center">
	   <div className="col-12 col-sm" align="center">
      <Card>
        <img src='images/welcome.png' height="100" width="200"></img>
        </Card>
        </div>
		<p>{this.state.tutor &&
							this.state.tutor.map(t1 =>{
							return(
							<Row className="form-group">
							<Col md={{size:10, offset: 2}}>
							<Card>
							<div key={t1.Name} className="col-12 col-sm mt-5">
								
									<Media body className="col-12 col-sm-6">
										<Media heading>PERSONAL DETAILS</Media>
										<p><b>TUTOR NAME       </b> : {t1.Name}</p>
										<p><b>TUTOR AGE    </b>  : {t1.Age}</p>
										<p><b>PHONE NUMBER</b> : {t1.Phone_number}</p>
										<p><b>QUALIFICATION</b> : {t1.Qualification}</p>
								</Media>
								
								<hr />
							</div>
							</Card>
							</Col>
							</Row>
							)	
							})}</p>
	  </div>
    );
}
}

export default Home1;