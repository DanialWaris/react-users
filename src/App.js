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
      
        <Route path="/home/:name/:id" component={Home} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/view/:id" component={View} />
        <Route path="/" component={Login} />

      </Switch>
    </Router>
    </div>
  );
}

export default App;





