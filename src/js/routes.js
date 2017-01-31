import Main from './Main';
import TodoAppDashboard from './components/TodoAppDashboard';
import NotFound from './components/NotFound';

export default {
	  path: '/',
	  component: Main,
	  indexRoute: { component: TodoAppDashboard },
	  childRoutes: [
	    {path: '*', component: NotFound}
	  ]
}