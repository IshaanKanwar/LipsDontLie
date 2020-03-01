import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import './App.css';
import { Typography } from '@material-ui/core';

export default class Form extends Component{
	constructor(props) {
		super(props);
		  	this.state = {
			selectedFile: null
		}
	}
	
	onChangeHandler=event=>{
		this.setState({
			selectedFile: event.target.files[0],
			loaded: 0,
		  })
		console.log(event.target.files[0])
	
	}
	
	onClickHandler = () => {
		const data = new FormData() 
		data.append('file', this.state.selectedFile)
		console.log(this.state.selectedFile);
		axios.post(`https://storageupload.s3.us-east-2.amazonaws.com/${this.state.selectedFile.name}`, data, { // receive two parameter endpoint url ,form data... Use firebase or aws s3 storage http://localhost:8000/upload
      })
      .then(res => { // then print response status
		console.log(res.statusText)
		console.log(res.data)
      })

	}

    render(){
        return(
            <div>
			 <Typography variant="h2" align="center" color="textPrimary">Upload Your File </Typography>
			 <input type="file" name="file" onChange={this.onChangeHandler}/>
			 <Button type="outlined" color="primary" disableElevation onClick={this.onClickHandler}>Upload</Button>
            </div>
        )
    }
}