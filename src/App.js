import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route exact path ='/' component={Home} />
        <Route exact path ='/projects' component={Projects} />
        <Route exact path = '/contact' component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
