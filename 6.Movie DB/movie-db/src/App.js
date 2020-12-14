import './App.scss';
import { Route, Switch } from 'react-router-dom';
import MovieHub from './Containers/MovieHub/MovieHub';
import MoviePage from './Containers/MoviePage/MoviePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={MovieHub} />
        <Route path="/movie" component={MoviePage} />
      </Switch>
    </div>
  );
}

export default App;
