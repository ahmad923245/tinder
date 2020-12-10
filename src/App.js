import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat">
          <Header backButton="/" />
          <Chats />
          </Route>
          <Route path="/">
         <Header />
            <TinderCards />
            <SwipeButtons/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
