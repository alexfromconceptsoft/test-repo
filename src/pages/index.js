import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from "react-router-dom";
import AllUsersPage from './AllUsersPage';
import AddUserPage from './AddUserPage';
import EditUserPage from './EditUserPage';

import '../App.scss';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Add User Page</Link>
          </li>
          <li>
            <Link to="/all">All Users Page</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <AddUserPage />
          </Route>
          <Route exact path="/all">
            <AllUsersPage />
          </Route>
          <Route path="/edit">
            <EditUserPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  }

  export default App;
