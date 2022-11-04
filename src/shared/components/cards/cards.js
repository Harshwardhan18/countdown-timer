import React from 'react';
import styled from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai'

const Card = styled.div`
  background: white;
  margin: 1em 0;
  height: 80px;
  transition: height 0.1s ease-in-out;
  width: 350px;
  box-shadow: 2px 1px 4px 4px #1e477870;
  padding: 2px 8px;
  position: relative;
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
`;

const Close = styled.button`
position: absolute;
top: 2%;
right: 0;
outline: none;
border: none;
background: white;
cursor: pointer;
`;

const Cards = ({children, clicked, isClose = true}) => {
      return (
            <Card>
                  {children} 
                  {isClose && <Close onClick={clicked} > <AiFillCloseCircle /></Close>}
            </Card>
      );
}

export default Cards;
