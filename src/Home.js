import React, {Fragment,Component}from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';




// <Popover
//         id={id}
//         open={open}
//         anchorEl={this.state.anchorEl}
//         onClose={this.handleClose}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'center',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'center',
//         }}
//       >
//         <Typography style={{width:'100px',height:'100px'}}>The content of the Popover.</Typography>
//       </Popover>
//       handlePop = (event) => {
//     this.setState({anchorEl:event.currentTarget});
//   };

// handleClose = () => {
//     this.setState({anchorEl:null})
//   };





class Home extends Component {
 constructor(props) {
    super(props);
    this.state={
      value:null,
      predicted:null,
      data:null

    }
  
  }
  handleChange=(e)=>
    {
      this.setState({value:e.target.value})
    }
handleClick=()=>{
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const uri='https://complaintpredictiontype.herokuapp.com/predict?message='+this.state.value;
    //console.log(uri)

      fetch(proxyurl+uri,{
        method: 'GET',
        })
      .then(response =>  response.text())
      .then(resData => {
        this.setState({data:resData})
        console.log(resData)
  
        
      });
}




    
  
  render() 
  {
    
    
    return (
      <div style={{width:'400px',height:'200px'}}>
      <textarea
            
            placeholder="Type complaint here...."
            onChange={ this.handleChange }
            style={{width:'100%',height:'100%',marginTop:'20px',}}

         />
         <button 
         onClick={this.handleClick}
         style={{marginLeft:'350px',}}
         >Predict</button>


         {this.state.data}

         
       
         
      </div>
      );
  }
}

export default Home;
