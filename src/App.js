import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Paper_Creator from "./Components/Paper_Creator"
import Home from "./Components/Home";

function App() {
  return (
    <>
      {/* <Paper_Creator /> */}
      {/* <Home /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/create" component={Paper_Creator}/>
          <Redirect to='./'/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
