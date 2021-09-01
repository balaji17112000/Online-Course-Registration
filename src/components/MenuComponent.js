
import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media, Button,Col,Row,Modal, ModalHeader, ModalBody, Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import {  MDBInput } from 'mdbreact';
import fire from 'firebase' ;
import {db} from '../config/firebase';



class Menu extends Component{
  constructor(props){
        super(props);
        this.state={
			isModalOpen: false,
			isModalOpen2: false,
			menu: null,
			enroll:0
        };
		this.toggleModal = this.toggleModal.bind(this);
		this.toggleModal2 = this.toggleModal2.bind(this);
    }
  
  componentWillMount(){
  
	
		db.collection('menu')
		.get()
		.then( snapshot => {
			const menu =[]
			snapshot.forEach( doc =>{
			const data = doc.data()
			menu.push(data)
			})
			this.setState({menu: menu})
		})
}
toggleModal() {
            this.setState({
              isModalOpen: !this.state.isModalOpen

            });
          }
toggleModal2() {
            this.setState({
              isModalOpen2: !this.state.isModalOpen2

            });
          }
enrollment1=() => {
	db.collection('menu').doc('9gj4Cx8Hcj0g6rbChWR4')
		.update({enrollment:this.state.enroll + 1})	
}

render(){
  return(
   <div className="container">
       <Breadcrumb>
               <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
               <BreadcrumbItem active>Menu</BreadcrumbItem>
			   
           </Breadcrumb>
           <div className="col-12">
               <h3>Menu</h3>
               <hr />
			   
               <div>
			   <div><p>

			   {this.state.menu &&
							this.state.menu.map(menu1 =>{
							return(
							<Row className="form-group">
							<Col md={{size:10, offset: 2}}>
							
							<Card>
							<div key={menu1.coursetitle} className="col-12 col-sm mt-5">
								<Media tag="li">
									<Media left middle>
									
										<Media object src="images/machine learning.jpg" alt={menu1.coursetitle} />
									
         
									</Media>
									<Media body className="col-12 col-sm-6">
										<Media heading>{menu1.coursetitle}</Media>
										<p><b>AUTHOR</b> : {menu1.author}</p>
										<p><b>SKIILS YOU WILL GAIN</b>  : {menu1.skills}</p>
										<p><b>COST</b> : <i>{menu1.cost}</i></p>
										
										<Row className="form-group">
										<Col md={{size:10}}>
										
										<Button  type="submit" color="primary" onClick={() => {this.toggleModal()}}>
													<i> ENROLL</i>
												</Button>
												<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>

										<ModalHeader toggle={this.toggleModal} >CONFORMATION</ModalHeader>

										<ModalBody>
											
											<div>
												
												<Button  type="submit" color="primary" onClick={() => {this.toggleModal2();
										 this.enrollment1()}}>
													<i>$30 PAY</i>
												</Button>
												
											</div>
											
											</ModalBody>
											</Modal>
											<Modal isOpen={this.state.isModalOpen2} toggle={this.toggleModal2}>
											<ModalHeader toggle={this.toggleModal2} className="bg-success">CONGRATULATIONS</ModalHeader>
											<ModalBody>
											<Form onSubmit>
												<p><b>COURSE ENROLLED</b></p>
												</Form>
											</ModalBody>
											</Modal>
												</Col>
												</Row>
												
									</Media>    
								</Media>
								<p><b>DESCRIPTION</b> : <i>{menu1.description}</i></p>
								<hr />
							</div>
							</Card>
							</Col>
							</Row>
							)	
							})}</p></div></div>
			   </div>

           </div>
       
       


);
}
}


export default Menu;
