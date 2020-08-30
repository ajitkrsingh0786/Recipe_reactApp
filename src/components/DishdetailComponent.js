import React,{Component} from 'react';
//import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from  'reactstrap';
//import {DishDetail} from './DishdetailComponent';
import { Card, CardImg, CardText, CardBody,
   CardTitle, Breadcrumb, BreadcrumbItem, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';
 
     

    
   function  RenderDish({dish}){
        if(dish!=null){

            return(
                 <div>
                  <CardBody>
                     <CardTitle>heading>{dish.name}</CardTitle>
                     <CardText> {dish.description }</CardText>
                     </CardBody>
                      
                      
                      </div>);
                       
                       
        }else{
           return(<div></div>);
        }
    }

         function RenderComments(comment){
             
                   
                  if(comment!=null){
                    const m=['Jan','Fab','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                  
                    return(
                        <div>
                        <div key={comment.id}  >
                             
                            <ul class = "list-unstyled">
                                <li>{comment.comment}</li>
                                 
                                 <li>--{comment.author}, { m[new Date().getMonth()]} {new Date().getDate()},{new Date().getFullYear()} </li>
                              </ul>
                       </div>
                        
                       </div>
                       );
                
                 }else{
                    return( <div></div>);
                 }
     }            

     const DishDetail = (props) => {
             
           if(props.dish!=null && props.comments!=null){

            const comments=props.comments.map(RenderComments);

                 return(
                      <div className="container">
                          <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                       <div div className="row">
                           <div className="col-12 col-md-5 mt-1">
                         
                           <Card >
                            <CardImg width="100%" object src={props.dish.image} alt={props.dish.name}/> 
                          
                               <RenderDish dish={props.dish} />
                               </Card>
                          </div>
                          
                         <div className="col-12 col-md-5 mt-1">
                           <h4>Comments:</h4>
                               {comments}
                               <CommentForm/>
                            </div>
                             
                       </div>  

                          
  </div>
            );}
           else{
               return(<div></div>);
           }        
    
        }
export default DishDetail;