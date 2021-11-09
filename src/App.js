import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Explore from './Pages/Explore/Explore/Explore';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
        <Route path="/explore">
          <Explore></Explore>
        </Route>
        </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;