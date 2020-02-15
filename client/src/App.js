import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Container from "./components/Container/Container";
import Row from "./components/Row/Row";
import BookSearch from "./components/BookSearch/BookSearch";
import BookResults from "./components/BookResults/BookResults";
import BookSaved from "./components/BookSaved/BookSaved";

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
            <BookSearch />
          </Row>
          <Row className="text-center" >
            <BookResults/>
          </Row>
          </Route>
          <Route exact path="/books/:id">

          <Row className="text-center">
            <BookSaved/>
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
