import React, { useState } from 'react'
import a1 from '../Images/a1.jpg';
import styled from 'styled-components';



const SlickBar = styled.div`
  color:  White;
  display: flex;
  align-items: center;
  background-color: #262e3d;
  justify-content:space-between ;
  width:12rem;
  left: ${(props) => (props.clicked ? "0rem" : "-10rem")};
  position:fixed;
  top:0;
  bottom:0;
  height:25vh;
  margin:auto;
  padding:0px 0px 0px .5rem;
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
  box-shadow: 0px 0px 8px black;
  @media (max-width: 700px) {
    height: 20vh;
  }
`;

const FirstPart = styled.div`
width:100%;
display:flex;
justify-content:center;

`;

const Profile = styled.div`
  
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  transition: all 0.3s ease;

  img {
    width: 3.5rem;
    height: 4rem;
    border-radius: 50%;
    cursor: pointer;
    border: 3px solid grey;
     
    &:hover {
      border: 3px solid #d1d2d3;
    }
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
  font-size: 0.8rem;
  
  a {
    
    text-decoration: none;
    color: gray;
    margin:0.5rem 0;

    &:hover {
      text-decoration: underline;
    
    }
  }
`;

const SecondPart = styled.div`

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


const Trail = () => {


const [click, setClick] = useState(false);
  const handleClick = () => {
      
  setClick(!click);
  //console.log(click);

  }

  return (
      
        <SlickBar clicked={click}>
          <FirstPart>
            <Profile >
                <img
                  
                  src={a1}
                  alt="Profile"
                />
                <Details >
                  <Name>
                    Developed By<br></br>
                     &nbsp;&nbsp;&nbsp; Sasank&nbsp;G
                    <a href="https://github.com/SASANK-G" target="_blank" rel="noopener noreferrer">View&nbsp;Profile</a>
                  </Name>
                </Details>
            </Profile>
          </FirstPart>
            <SecondPart>
              <Button clicked={click} onClick={() => handleClick()}>
            </Button>
            </SecondPart>
        </SlickBar>

    
  );
}

export default Trail
