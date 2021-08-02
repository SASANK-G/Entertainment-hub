
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
import { useState } from 'react';




const SidebarContainer = styled.div`
  background-color: #39845a;
  width: 2rem;
  height: 20vh;
  top:0;
  
  right:0;
  bottom:0;
  border-radius: 0 30px 30px 0;
  
  position: fixed;
  display: flex;
  
  align-items: center;
  justify-content: center;
  margin:auto;

  
`;


const SlickBar = styled.div`
  color:  green;
  display: flex;
  align-items: center;
  background-color: white;
  justify-content:space-between ;
  width:12rem;
  left: ${(props) => (props.clicked ? "0rem" : "-9.5rem")};
  position:fixed;
  top:0;
  bottom:0;
  height:30vh;
  margin:auto;
  padding:0px 0px 0px .5rem;
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;
{/*width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};*/}

const FirstPart = styled.div`
width:4rem;
background-color:red;


`;

const SecondPart = styled.div`

background-color:blue;
display:flex;
justify-content:flex-end;
align-items:center;


`;




const Button = styled.button`
  background-color: black;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  
  cursor: pointer;
  
  

  display: flex;
  justify-content: center;
  align-items: center;
  `;





function App() {

  const [click, setClick] = useState(false);
  const handleClick = () => {
      
  setClick(!click);
  console.log(click);
}

  return (
    
      <BrowserRouter>
      <SidebarContainer>
        <SlickBar clicked={click}>
          <FirstPart>
                hi
          </FirstPart>
            <SecondPart>
              <Button clicked={click} onClick={() => handleClick()}>
            </Button>
            </SecondPart>
        </SlickBar>
      </SidebarContainer>
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
