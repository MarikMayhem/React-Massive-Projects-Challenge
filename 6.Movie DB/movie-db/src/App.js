import './App.scss';
import { Route, Switch } from 'react-router-dom';
import MovieHub from './Containers/MovieHub/MovieHub';
import MoviePage from './Containers/MoviePage/MoviePage';
import PersonPage from './Containers/PersonPage/PersonPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={MovieHub} />
        <Route path="/movie" component={MoviePage} />
        <Route path="/person" component={PersonPage} />
      </Switch>
    </div>
  );
}

export default App;
