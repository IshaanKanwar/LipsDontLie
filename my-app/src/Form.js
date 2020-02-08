import React,{Component} from 'react';
import axios from 'axios';
import './App.css';

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
		axios.post("http://localhost:8000/upload", data, { // receive two parameter endpoint url ,form data... Use firebase or aws s3 storage
      })
      .then(res => { // then print response status
        console.log(res.statusText)
      })

	}

    render(){
        return(
            <div>
			 <label>Upload Your File </label>
			 <input type="file" name="file" onChange={this.onChangeHandler}/>
			 <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
            </div>

        )
    }
}