
import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';


function About(props) {



  return(
   <div className="container">
       <div className="row">
           <Breadcrumb>
               <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
               <BreadcrumbItem active>About Us</BreadcrumbItem>
           </Breadcrumb>
           <div className="col-12">
               <h3>About Us</h3>
               <hr />
           </div>
       </div>
       <div className="row row-content">
           <div className="col-12 col-md-6">
               <h2>Our History</h2>
               <p>Started in 2020, AB ACADEMY quickly established  as a  icon of excellence organisartion in Chennai.   Featuring courses related to computer science and engineering.</p>
               <p>The AB ACADEMY is the best site for courses to <em>learn and gain </em> knowledge, a successful chain started by our CEO, <b>BALAJI</b>.</p>
           </div>
           <div className="col-12 col-md-5">
               <Card>
                   <CardHeader className="bg-primary text-white">OUR TEAM</CardHeader>
                   <CardBody>
                       <dl className="row p-1">
                           <dt className="col-6">Started</dt>
                           <dd className="col-6">10 OCT. 2020</dd>
                           <dt className="col-6">CEO</dt>
                           <dd className="col-6">BALAJI</dd>
                           <dt className="col-6">PARTNER</dt>
                           <dd className="col-6">ASWIN</dd>
                           <dt className="col-6">Last Year's Turnover</dt>
                           <dd className="col-6">$1000</dd>
                           <dt className="col-6">Employees</dt>
                           <dd className="col-6">57</dd>
                       </dl>
                   </CardBody>
               </Card>
           </div>
           <div className="col-12">
               <Card>
                   <CardBody className="bg-faded">
                       <blockquote className="blockquote">
                           <p className="mb-0">ALWAYS REMEMBER THIS QUOTES</p>
                           <footer className="blockquote-footer">
                           <cite title="Source Title"><b>You</b> are the creator of your <b>own</b> destiny.</cite>
                           </footer>
                       </blockquote>
                   </CardBody>
               </Card>
           </div>
       </div>

   </div>
);
}


export default About;
