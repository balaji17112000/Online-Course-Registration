
import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media, Button,Col,Row,Modal, ModalHeader, ModalBody, Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import {  MDBInput } from 'mdbreact';
import fire from 'firebase' ;
import {db} from '../config/firebase';


class Menu1 extends Component{

  constructor(props){
        super(props);
        this.state={
			isModalOpen: false,
			menu: null,
			cost: null,
			title: '',
			cost: '',
			desc: '',
			skills: '',
			author: '',
			offer: 0
        };
		this.toggleModal = this.toggleModal.bind(this);
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
title1 = (e) => {

  let title = e.target.value;

  this.setState({title});
}
author1 = (e) => {
  let author = e.target.value;

  this.setState({author});
}

cost1 = (e) => {
  let cost = e.target.value;

  this.setState({cost});
}

skills1 = (e) => {
  let skills = e.target.value;

  this.setState({skills});
}

desc1 = (e) => {
  let desc = e.target.value;

  this.setState({desc});
}	  

addnewcourse=() => {
	db.collection('menu')
	.add({
		author:this.state.author,
		cost:this.state.cost,
		coursetitle:this.state.title,
		description:this.state.desc,
		skills:this.state.skills
	})
	db.collection('menu').doc('9gj4Cx8Hcj0g6rbChWR4')
	.update({course_offered:this.state.offer + 1})	
}

render(){

  return(
   <div className="container">
   <div className="row">
           <Breadcrumb>
               <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
               <BreadcrumbItem active>Menu</BreadcrumbItem>
           </Breadcrumb>
           <div className="col-12">
               <h3>Menu</h3>
               <hr />
			   
               									
			   <div className="grey-text" align="center">
            <span>COURSE TITLE</span>
            <MDBInput
              group
              validate
              error="wrong"
              success="right"
              onChange = {(e)=>this.title1(e)}
            />
			<span>AUTHOR</span>
            <MDBInput
              group
              validate
              error="wrong"
              success="right"
              onChange = {(e)=>this.author1(e)}
            />

          <span>COST</span>

            <MDBInput
              group            
              validate
              onChange = {(e)=>this.cost1(e)}
            />
			            

          <span>DESCRIPTION</span>

            <MDBInput
              group            
              validate
              onChange = {(e)=>this.desc1(e)}
            />
			<span>SKILLS</span>

            <MDBInput
              group            
              validate
              onChange = {(e)=>this.skills1(e)}
            />
			
          
			   
			   <Button  type="submit" color="primary" onClick={() => {this.toggleModal();
			   this.addnewcourse()}}>
							<i> ADD Course</i>
						</Button><hr />
						<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>

				<ModalHeader toggle={this.toggleModal} >SUCCESSFULL</ModalHeader>

				<ModalBody>
					<Form onSubmit>
					<div>

						<p><b>COURSE ADDED</b></p>
					</div>
					</Form>
					</ModalBody>
					</Modal>
					<div>
			   <p>{this.state.menu &&
							this.state.menu.map(menu1 =>{
							return(
							<Row className="form-group">
							<Col md={{size:10, offset: 2}}>
							
							<card>
							
								<Media tag="li">
									<Media left middle>
									
										<Media object src="images/machine learning.jpg" alt={menu1.coursetitle} />
									
         
									</Media>
									<Media body className="col-12 col-sm-6">
										<Media heading>{menu1.coursetitle}</Media>
										<p><b>AUTHOR</b> : {menu1.author}</p>
										<p><b>cost</b> : <i>{menu1.cost}</i></p>
										
									</Media>    
								</Media>
								
								<hr />
							
							</card>
							</Col>
							</Row>
							)	
							})}</p></div></div>
			   </div>

           </div>
       
       
       </div>


);
}
}


export default Menu1;
