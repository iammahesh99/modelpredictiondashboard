import React, {Fragment,Component}from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Home from "./Home.js";
import ReviewList from "./ReviewList.js";


class Mainscreen extends Component {
 constructor(props) {
    super(props);
    this.state={
      a:false
      

    }
  
  }
  
handleClick=()=>{
  this.setState({a:!this.state.a})
}




    
  
  render() 
  {
    
    
    return (
      <div style={{width:'100%',height:'100%',marginTop:'2%'}}>
      <button
      style={{fontSize:'20px',backgroundColor:'#FAE5D3'}}
      onClick={this.handleClick}>
      Click to Show All Received Complaint File</button>
      {this.state.a?<ReviewList />:null}
      
       
         
      </div>
      );
      }
  }


export default Mainscreen;
