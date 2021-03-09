import styled from 'styled-components';

export const Menu = styled.div`
  width: 10%;
  height: 10px;
  padding: 1px;
  background-color: #f5e7e7;
  color: #63bcff;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: left;
  overflow: hidden;

  ul {
    width: 75%;
    display: flex;
    align-items: left;
    justify-content: left;
    font-size: 10px;
    list-style: none;
    
    li {
    margin: 0;
    width: 35%
      
    }
    @media (max-width: 800px){
        margin: 0 5px;
        font-size: 10px;

      }
  }

  a {
    text-decoration: none;
    color: #63bcff;
    display: flex;
    align-items: left;
    justify-content: left;

    &:hover {
      opacity: 0.9;
    }
  }

  .cartMenu {
    display: flex;
    margin: auto;
    font-size: 5px;
    width: 5%;

    &:hover{
      cursor: pointer;
      opacity: 0.9;
    }
  }
`;

export const Icon = styled.img`
    width: 60px;
    padding: 0;

    &:hover {
      opacity: 0.9;
    }
  `;

export const User = styled.div`
  height: 20%;
  width: 20%;
  display: flex;
  align-items: left;
  justify-content: left;
  font-size: 10px;
    
  a {
    display: flex;
    align-items: left;
    justify-content: left;
    color: #63bcff;
    text-decoration: none;
    padding: 5px;
    
    &:hover {
      opacity: 0.9;
    }
  }

  @media (max-width: 800px){
    flex-direction: column;
    font-size: 20px;
    a{padding: 2px;}
  }
`;