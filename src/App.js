
import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SimpleBottomNavigation from './components/MainNav';
import Trending from './components/Pages/Trending/Trending';
import Movies from './components/Pages/Movies/Movies';
import Search from './components/Pages/Search/Search';
import Series from './components/Pages/series/Series';
import styled from 'styled-components';




const SidebarContainer = styled.div`
  background-color: #39845a;
  width: 3.5rem;
  height: 80vh;
  top:0;
  bottom:0;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  
`;










function App() {
  return (
      <BrowserRouter>
       <Header/>
       <SidebarContainer>

       </SidebarContainer>
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
