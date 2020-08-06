import React,{Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from  'reactstrap';
//import {DishDetail} from './DishdetailComponent';

class DishDetail extends Component{

    constructor(props){
        super(props); 
        
        this.state={
            selectedDish: null,
             
        }
    }

    onDishSelect(dish){
        this.setState({selectedDish: dish})    
    }
    
    renderDish(dish){
        if(dish!=null){

            return(
                  <CardBody>
                     <CardTitle >heading>{this.props.dish.name}</CardTitle>
                     <CardText> { this.props.dish.description }</CardText>
                     </CardBody>
                      );
                       
        }else{
           return(<div></div>);
        }
    }

            renderComments(comment){
                  const m=['Jan','Fab','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                 if(comment!=null){
                  
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

    render(){
             
           if(this.props.dish!=null){

            const comments=this.props.dish.comments.map(this.renderComments);

                 return(
                      <div className="container">
                       <div div className="row">
                     <div className="col-12 col-md-5 mt-1">
                         
                    <Card onClick={()=>this.onDishSelect(this.props.dish)}>
                    <CardImg width="100%" object src={this.props.dish.image} alt={this.props.dish.name}/> 
                          
                         {this.renderDish(this.state.selectedDish)}
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
}
export default DishDetail;