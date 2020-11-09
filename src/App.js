import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './Page/Home';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" component = {HomePage}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
