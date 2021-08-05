import Landing from 'views/Landing/Landing';
import UserCreate from 'views/User/Create/User';
import ProjectCreate from 'views/Project/Create/Create';
import ProjectEdit from 'views/Project/Edit/Edit';

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

  },
  {
    path: "/user/create",
    component: UserCreate,
  },
  {
    path: "/project/create",
    component: ProjectCreate,
    
  },
  {
    path: "/project/edit/:id",
    component: ProjectEdit,
  }
];