import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles.scss";

import Navigation from "components/Navigation";
import MovieList from "components/MovieList";
import Detail from "components/Detail";
import Footer from "components/Footer";

const App = props => [
  <Navigation key={0} />,
  <PublicRoute key={1} />,
  <Footer key={2} />
];

const PublicRoute = props => (
  <Switch>
    <Route exact path="/movie-finder/" component={MovieList} />
    <Route exact path="/movie-finder/search/:query" render={() => "search"} />
    <Route exact path="/movie-finder/detail/:id" component={Detail} />
  </Switch>
);

export default App;
