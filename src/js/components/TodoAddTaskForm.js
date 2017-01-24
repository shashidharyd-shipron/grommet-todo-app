import React, { Component, PropTypes } from 'react';
import Button from 'grommet/components/Button';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import FormFields from 'grommet/components/FormFields';
import Footer from 'grommet/components/Footer';
import Layer from 'grommet/components/Layer';
import TextInput from 'grommet/components/TextInput';
import Box from 'grommet/components/Box';

export default class TodoAddTaskForm extends Component {
	constructor (){
		super ();

		this._onSubmit=this._onSubmit.bind(this);
		this._onLabelChange=this._onLabelChange.bind(this);
		this._onStatusChange=this._onStatusChange.bind(this);
		this.state = {
			label: undefined,
			status: undefined
		}
	}

	_onSubmit (e){
		e.preventDefault();
		console.log(this.state);
		if (this.state.label){
			this.props.onSubmit({
				label: this.state.label,
				status: this.state.status || 'ok'
			})

		}
	}

	_onLabelChange (e){
		this.setState({ label: e.target.value});
	}

	_onStatusChange (e){
		this.setState({ status: e.target.value});
	}

	render (){
	 return (
	 	<Layer align='right' closer={true} onClose={this.props.onClose}>
	 	  <header><h1>Add Task</h1></header>
	 	  <Form>
	 	  	<FormField label="Task" htmlFor="labelId">
	 	  	  <input type="text" name='label' id='labelId' onChange={this._onLabelChange}/>
	 	  	</FormField>

	 	  	<FormField label="Status" htmlFor="statusId">
	 	  	  <select id='status' name='status' id='statusId' onChange={this._onStatusChange}>
			    <option value="ok">Done</option>
			    <option value="warning">Due</option>
			    <option value="critical">Future</option>
			  </select>
			</FormField>
		   </Form>
		   <Footer pad="small">
            <Box>
            	<Button primary={true} label="Add" onClick={this._onSubmit}/>
            </Box>
            <Box pad="medium">
            	<Button label="Cancel" onClick={this.props.onClose}/>
            </Box>
            </Footer>
      	</Layer>
	  );
	}
};

TodoAddTaskForm.propTypes = {
	onClose: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired
};