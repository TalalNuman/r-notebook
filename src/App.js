import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Navbar";
import NoteState from "./context/notes/NoteState";
export default function App() {
  return (
    <div >
      <NoteState>
        <Router>
          <Nav />
          <div className="container mx-auto">
            <Switch>
              {/* <h1> HEELO WORLD</h1> */}
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </div>
  );
}
