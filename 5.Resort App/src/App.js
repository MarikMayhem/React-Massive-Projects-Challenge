import './App.scss';
import Header from './Components/Header/Header';
import MainBanner from './Components/MainBanner/MainBanner';
import ServiceHeading from './Components/ServiceHeading/ServiceHeading';
import FeaturedRooms from './Containers/FeaturedRooms/FeaturedRooms';
import SearchRooms from './Containers/SearchRooms/SearchRooms';
import RoomFeatures from './Containers/RoomFeatures/RoomFeatures';
import MainBackground from './Assets/images/defaultBcg.jpeg';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Route
        path='/'
        exact
        render={() => (
          <MainBanner
            heading={"Luxurious Rooms"}
            description={"Deluxe Rooms Starting At $299"}
            backgroundImage={MainBackground}
            linkTo={"/rooms"}
            linkDescription={"OUR ROOMS"} />
        )}
      />
      <Route path='/' exact component={ServiceHeading} />
      <Route path='/' exact component={FeaturedRooms} />
      <Route path='/rooms' component={SearchRooms} />
      <Route path='/features' component={RoomFeatures} />
    </div>
  );
}

export default App;
