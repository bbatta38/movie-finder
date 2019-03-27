import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles.scss";

import Navigation from "components/Navigation";
import MovieList from "components/MovieList";
import Footer from "components/Footer";

const App = props => [
  <Navigation key={0} />,
  <PublicRoute key={1} />,
  <Footer key={2} />
];

const PublicRoute = props => (
  <Switch>
    <Route exact path="/" component={MovieList} />
    <Route exact path="/detail/:id" render={() => "detail"} />
  </Switch>
);

export default App;
