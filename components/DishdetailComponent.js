import React,{Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from  'reactstrap';
//import {DishDetail} from './DishdetailComponent';

 
     

    
   function  RenderDish({dish}){
        if(dish!=null){

            return(
                  <CardBody>
                     <CardTitle >heading>{dish.name}</CardTitle>
                     <CardText> {dish.description }</CardText>
                     </CardBody>
                      );
                       
        }else{
           return(<div></div>);
        }
    }

         function RenderComments(comment){
             
                   
                  if(comment!=null){
                    const m=['Jan','Fab','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                  
                    return(
                        <div key={comment.id}  >
                             
                            <ul class = "list-unstyled">
                                <li>{comment.comment}</li>
                                 
                                 <li>--{comment.author}, { m[new Date().getMonth()]} {new Date().getDate()},{new Date().getFullYear()} </li>
                              </ul>
                       </div>
                       );
                
                 }else{
                    return( <div></div>);
                 }
     }            

     const DishDetail = (props) => {
             
           if(props.dish!=null){

          const comments=props.dish.comments.map(RenderComments);

                 return(
                      <div className="container">
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
                            </div>
                       </div>    
                      </div>
            );}
           else{
               return(<div></div>);
           }        
    
        }
export default DishDetail;