import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
//import Dropdown from './Dropdown';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Home from "./Home.js";
import Toast from 'light-toast';
import Popover from '@material-ui/core/Popover';






class ReviewList extends Component{


	constructor(props){
		super(props);
		
		this.state= {
			
			hit: [],
			filename: null,
			anchorEl:false,
			message:null,
			value:true
			

		};
		this.handleListItemClick = this.handleListItemClick.bind(this);


	}

	handleListItemClick = (event, index) => {
		
    	//this.setState({filename:index});
    	const uri='https://maheshpandey9919.000webhostapp.com/newproject/services/Review/fileread.php?fname='+index;
		

    	fetch(uri,{
        method: 'GET',
        })
    	.then(response =>  response.text())
    	.then(resData => {
    		//const Data=resData;

		const Data = resData;
		Toast.loading('Searching');
          setTimeout(() => {
            Toast.hide();
          }, 2000);

		
    	
    	this.setState({message:Data});
    	this.setState({value:true})
    
        
      });
    	
  }
  handleClose=()=>{
  	this.setState({anchorEl:false})
  	this.setState({value:false})
  	console.log("clicked")
  }
  




componentDidMount() {
		const uri='https://maheshpandey9919.000webhostapp.com/newproject/services/Review/Showallfiles.php';
		

    	fetch(uri,{
        method: 'GET',
        })
    	.then(response =>  response.json())
    	.then(resData => {
    		//const Data=resData;

		const Data = resData;

    	
    	this.setState({hit:Data});
    	
        
      });
  	}
  	







	render(){
		if(this.state.value)
		{
		if(this.state.message!=null)
		{
			this.state.anchorEl=true;
		}}
		const open = Boolean(this.state.anchorEl);
 		 const id = open ? 'simple-popover' : undefined;
   
		
		return (
			<React.Fragment>
			<div style={{width:'600px',backgroundColor:'#33FFAF'}}>

				<h2>All Complaint</h2>
						<List >

						{ this.state.hit.map((item) => {return <ListItem key={item.id}  
						button
						style={{width:'100%',
						backgroundColor:'#95A5A6 ',
						marginBottom:'2%',
						fontSize: '18px'
						
					}}
						selected={this.state.filename=== item.filename}
						onClick={event => this.handleListItemClick(event, item.filename)}
			          	>

						{item.filename}
						
					
						</ListItem> })}
						
						
						  </List>
			 <Popover
		        id={id}
		        open={open}
		        anchorEl={this.state.anchorEl}
		        onClose={this.handleClose}
		        anchorOrigin={{
		          vertical: 'bottom',
		          horizontal: 'center',
		        }}
		        transformOrigin={{
		          vertical: 'top',
		          horizontal: 'center',
		        }}
		      >
		      <Home message={this.state.message} />
      
        
      			</Popover>
			
			 </div>
			 </React.Fragment>
		        
			)
	}
}

export default ReviewList;
