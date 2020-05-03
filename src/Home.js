import React, {Fragment,Component}from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';





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
        const rawdata=resData.replace(/[^a-zA-Z ]/g, "")
        this.setState({data:rawdata})
        
  
        
      });
}




    
  
  render() 
  {
    
    
    return (
      <div style={{width:'400px',height:'200px'}}>
      <textarea
            
            placeholder="Type complaint here...."
            onChange={ this.handleChange }
            style={{width:'100%',height:'100%',marginTop:'20px',marginLeft:'10px'}}

         />
         <button 
         onClick={this.handleClick}
         style={{marginLeft:'350px',}}
         >Predict</button>
         <h3 style={{align:'center'}}>Predicted product:</h3>


         <p style={{color:'red'}}>{this.state.data}</p>

         
       
         
      </div>
      );
  }
}

export default Home;
