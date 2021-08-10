import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Watched from "./components/Watched";
import Add from "./components/Add";
import WatchList from "./components/WatchList";
import MovieDetails from "./components/MovieDetails";
import "./App.css";
import { MovieProvider } from "./context/MovieContext";
function App() {
  return (
    <MovieProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={WatchList} />
          <Route path="/add" exat component={Add} />
          <Route path="/watched" exact component={Watched} />
          <Route path="/moviedetails" exact component={MovieDetails} />
        </Switch>
      </Router>
    </MovieProvider>
  );
}

export default App;
