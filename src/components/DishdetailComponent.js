import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
   CardTitle, Breadcrumb, BreadcrumbItem, Button,Modal, ModalHeader, ModalBody,Form, 
   Input, Label,FormFeedback} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
 
class CommentForm extends Component{
    constructor(props){
        super(props);
        
         this.state = {
            name: '',
            isModalOpen: false,
            dropdownOpen: false,
            selectedEvents: "Choose Your Event",
            touched: {
                name: false         
            }
    };
        
        this.toggleModal = this.toggleModal.bind(this)
        this.toggle = this.toggle.bind(this);
        this.handleComment = this.handleComment.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(name) {
        const errors = {
            name: '',
            
        };

        if (this.state.touched.name && name.length < 3)
            errors.name = 'First Name should be >= 3 characters';
        else if (this.state.touched.name && name.length > 15)
            errors.name = 'Name should be <= 15 characters';
 

        return errors;
    }

 

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    
    toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
        
      handleComment(event) {
        this.toggleModal();
        alert("Rating: "+ this.rating.value + "  name: " + JSON.stringify(this.state.name) + "  Comment: " + this.comment.value);
        event.preventDefault();
  }

    render(){
        const errors = this.validate(this.state.name);
        return (
               <div> 

                   <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                   <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                       <ModalHeader toggle={this.toggleModal}>
                           <div>Submit Comment</div>
                       </ModalHeader>
                       <ModalBody toggle={this.toggleModal}>
                            
                           <Form onSubmit={this.handleComment}>
                               <Label htmFor="rating">Rating</Label>
                                <Input type="select" id="rating" name="rating" innerRef={(input) => this.rating = input}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                               <Label htmFor="name">Your Name</Label>
                               <Input type="text" id="name" name="name"
                                        placeholder="Name"
                                        value={this.state.name}
                                        valid={errors.name === ''}
                                        invalid={errors.name !== ''}
                                        onBlur={this.handleBlur('name')}
                                        onChange={this.handleInputChange} />
                                         <FormFeedback>{errors.name}</FormFeedback>
                               <Label htmFor="comment">Comment</Label>
                               <Input type="textarea" id="comment" name="comment" rows="8" innerRef={(input) => this.comment = input}/>
                               <br/><Button type="submit" color="primary">  Submit   </Button>
                           </Form>
                           
                       </ModalBody>
                   </Modal>
                   
              
               </div>

        );
    }

}

    
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
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if(props.dish!=null && props.comments!=null){

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