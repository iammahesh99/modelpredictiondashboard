import React, {Fragment,Component}from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';


class Home extends Component {
 constructor(props) {
    super(props);
    this.state={
      
      open:false,
      data:null,
      message:props.message,

    }
  
  }
handleClick=()=>{
  this.setState({open:!this.state.open})

}

componentDidMount(){
  console.log(this.state.message)
    
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const uri="https://complaintpredictiontype.herokuapp.com/predict?message="+this.state.message;
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
      <div style={{width:'400px',backgroundColor:'#ECF0F1'}}>
      <p >This complaint is <span style={{color:'red'}}>{this.state.data}</span> type</p>
      <button onClick={this.handleClick}>Show Message</button><br/>
      {this.state.open?
      <p
            style={{width:'100%'}}>
            {this.state.message}

         </p>:null}
 
      </div>
      );
  }
}

export default Home;
