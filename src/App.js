import React from "react";
import { Route,Switch } from "react-router";
import Body from "./Body/Body";
import Navbar from "./Navbar/Navbar";
import Page from "./Page/Page";

function App() {
 
  return (
    <div>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Body}/>
          <Route path="/:page" exact component={Page}/>
        </Switch>
    </div>
  );
}

export default App;
