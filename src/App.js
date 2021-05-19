import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Edit from './components/Edit';
import View from './components/View';

function App() {
  return (
    <div>
    <Router>
    <Navbar />

      <Switch>
      <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/edit/:id" component={Edit} />
        <Route exact path="/view/:id" component={View} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;





