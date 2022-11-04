import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  outline: none;
  border: none;
  background: #033d84;
  font-size: 16px;
  padding: 4px 8px;
  color: white;
  text-align: center;
  cursor: pointer;
  margin-top: 4px;
  &:hover {
    background: #033d84b8;
    transition: 0.5s;
  }
`;

const Button = ({name, clicked}) => {
      return (
            <StyledButton onClick={clicked} >{ name }</StyledButton>
      );
}

export default Button;
