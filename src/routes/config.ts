import Landing from 'views/Landing/landing';
import User from 'views/User/user';
import ProjectCreate from 'views/Project/Create/create';
import ProjectEdit from 'views/Project/Edit/edit';

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
export default [
  {
    path: "/",
    component: Landing,
    exact: true
  },
  {
    path: "/user/create",
    component: User,
    exact: true
  },
  {
    path: "/project/create",
    component: ProjectCreate,
    exact: true
  },
  {
    path: "/project/edit",
    component: ProjectEdit,
  }
];