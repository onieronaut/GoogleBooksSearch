import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Container from "./components/Container/Container";
import Row from "./components/Row/Row";
import Saved from "./pages/Saved";
import Results from "./pages/Results";

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Nav />
          <Container>
            <Switch>

              <Route exact path="/">

                <Row className="text-center">
                 <Results/>
                </Row>
              </Route>

              <Route exact path="/saved">
                <Row className="text-center">
                  <Saved/>
                </Row>
              </Route>



            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
