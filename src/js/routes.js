import Main from './Main';
import TodoAppDashboard from './components/TodoAppDashboard';
import NotFound from './components/NotFound';
import TodoAddTaskForm from './components/TodoAddTaskForm';

export default {
	  path: '/',
	  component: Main,
	  indexRoute: { component: TodoAppDashboard },
	  childRoutes: [
	    {path: '/add', component: TodoAddTaskForm },
	    {path: '*', component: NotFound}
	  ]
};
