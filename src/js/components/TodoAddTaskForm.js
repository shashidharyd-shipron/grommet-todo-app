import React, { Component, PropTypes } from 'react';
import Button from 'grommet/components/Button';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import FormFields from 'grommet/components/FormFields';
import Footer from 'grommet/components/Footer';
import TextInput from 'grommet/components/TextInput';
import Box from 'grommet/components/Box';

import { browserHistory } from 'react-router';
import { addTask } from '../store';

export default class TodoAddTaskForm extends Component {
	constructor (){
		super ();
		this._onCancel=this._onCancel.bind(this);
		this._onSubmit=this._onSubmit.bind(this);
		this._onLabelChange=this._onLabelChange.bind(this);
		this._onStatusChange=this._onStatusChange.bind(this);
		this.state = {
			label: undefined,
			status: undefined
		}
	}

	_onCancel (event) {
		event.preventDefault();
		browserHistory.push('/');
	}

	_onSubmit (e){
		e.preventDefault();
		if (this.state.label){
			addTask({
				label: this.state.label,
				status: this.state.status || 'ok'
			}).then( () => browserHistory.push('/'));

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
	 	<Box pad='medium'>
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
            	<Button href='/' label="Cancel" onClick={this._onCancel}/>
            </Box>
            </Footer>
      	</Box>
	  );
	}
};
