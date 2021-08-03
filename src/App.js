
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
import a1 from '../src/Images/a1.jpg';




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
  background-color: #262e3d;
  justify-content:space-between ;
  width:12rem;
  left: ${(props) => (props.clicked ? "0rem" : "-10rem")};
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
width:100%;

display:flex;
flex-direction:flex-end;
justify-content:end;


`;

const Profile = styled.div`
  
  

  padding: 0.5rem 1rem;
  /* border: 2px solid var(--white); */
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;

 
  

  transition: all 0.3s ease;

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      border: 2px solid grey;
      padding: 2px;
    }
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  
  align-items: center;
`;

const Name = styled.div`
  

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    display: inline-block;
  }

  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: grey;

    &:hover {
      text-decoration: underline;
    }
  }
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
  position:relative;
  cursor: pointer;
  
  

  display: flex;
  justify-content: center;
  align-items: center;

   &::before,
  &::after {
    content: "";
    background-color: white;
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
    
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }

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
            <Profile >
                <img
                  
                  src={a1}
                  alt="Profile"
                />
                <Details >
                  <Name>
                    <h4>Sasank&nbsp;G</h4>
                    <a href="https://github.com/SASANK-G">View&nbsp;Profile</a>
                  </Name>
                </Details>
            </Profile>
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
