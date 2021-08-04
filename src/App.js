
import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import Trending from './components/Pages/Trending/Trending';
import Movies from './components/Pages/Movies/Movies';
import Search from './components/Pages/Search/Search';
import Series from './components/Pages/series/Series';
import Trail from './components/Trail';




function App() {

  


  return (
    
      <BrowserRouter>
      <Trail/>
       <Header/>
       
        <div className="App">
          <Container>
            <Switch>
              <Route path="/" component={Trending} exact/>
              <Route path="/Movies" component={Movies} />
              <Route path="/Series" component={Series} />
              <Route path="/Search" component={Search} />

            </Switch>
          </Container>
        </div>
          

        <SimpleBottomNavigation/>
      </BrowserRouter>
  );
}

export default App;
