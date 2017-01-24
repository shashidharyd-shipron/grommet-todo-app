import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import Status from 'grommet/components/icons/Status';

import TodoAddTaskForm from './TodoAddTaskForm';

function getLabel(label, count, colorIndex) {
  return {
    "label": label,
    "value": count,
    "colorIndex": colorIndex
  };
}

export default class TodoAppDashboard extends Component {

  constructor () {
    super();
    this._onRequestForAddTask = this._onRequestForAddTask.bind(this);
    this._addTaskCancel = this._addTaskCancel.bind(this);
    this._onAddTaskConfirm=this._onAddTaskConfirm.bind(this);

    this.state = {
      tasks: [ ],
      addTask: false
    };
  }

  _onRequestForAddTask  () {
    this.setState({ addTask: true});
  }

  _addTaskCancel  () {
    this.setState({ addTask: false});
  }

  _onAddTaskConfirm (task) {
    let tasks = this.state.tasks;
    tasks.push(task);
    this.setState ({tasks:this.state.tasks, addTask: false});
  }

  render () {

    let tasksMap = {
      critical: 0,
      ok: 0,
      warning: 0
    };

    let tasks = this.state.tasks.map((task, index) => {

      tasksMap[task.status] += 1;

      let separator;
      if (index === 0) {
        separator = 'horizontal';
      }
      return (
        <ListItem key={`task_${index}`} separator={separator}
          responsive={false}>
          <Box>
            <Status value={task.status} size='small' />
            <span>{task.label}</span>
          </Box>
        </ListItem>
      );
    }, this);

    const series = [
      getLabel('Past Due', tasksMap.critical, 'critical'),
      getLabel('Due Soon', tasksMap.warning, 'warning'),
      getLabel('Done', tasksMap.ok, 'ok')
    ];

    let value, label;
    if (this.state.index >= 0) {
      value = series[this.state.index].value;
      label = series[this.state.index].label;
    } else {
      value = 0;
      series.forEach(serie => value += serie.value);
      label = 'Total';
    }

    let addTaskLayer;
    if (this.state.addTask) {
      addTaskLayer = (
      <TodoAddTaskForm onClose={this._addTaskCancel} onSubmit={this._onAddTaskConfirm}/>
      );
    }

    return (
      <Box primary={true} flex={true} direction='row'>
        <Box basis='1/3' align="center">
          <Meter series={series} type="circle" label={false}
            onActive={(index) => this.setState({ index: index })} />
          <Box direction="row" justify="between" align="center"
            responsive={false}>
            <Value value={value} units="Tasks" align="center" label={label} />
          </Box>
        </Box>
        <Box basis='2/3' pad='medium'>
          <Heading tag='h3'>My Tasks</Heading>
          <List>
            {tasks}
          </List>
          <Footer>
            <Button label="Add Task" onClick={this._onRequestForAddTask}
            primary={true}/>
          </Footer>
          {addTaskLayer}
        </Box>
      </Box>
    );
  }
};
