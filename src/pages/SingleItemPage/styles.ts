import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  margin: 38px auto;

  a {
    text-decoration: none;
    color: #FF6B00;
    display: flex;
    align-items: left;
    font-size: 4
    
    0px;
    margin-bottom: 5px;

    svg {
      margin-right: 80px;
    }
  }
`;

export const SearchBar = styled.div`
  max-width: 1295px;
  width: 100%;
  display: flex;
  margin: 0 auto 25px auto;


  div {
    flex: 2;
  }

  button{
    flex: 1;
  }
  @media(max-width: 700px){
    flex-direction: column;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1295px;
  background: 0093FF;
  border-radius: 20px;
  min-height: 650px;


  img {
    max-height: 520px;
    max-width: 520px;
    width: 100%;
    margin: 52px 0 0 52px;
  }

  div {
    flex: 1;
    margin-top: 80px;
    margin-left: 80px;
    max-width: 500px;
    h2 {
      font-size: 36px;
      color: 0093FF;
    }
    span {
      color: green;
      font-size: 24px;
    }
    strong {
      font-size: 80px;
      font-weight: 500px;
    }
    p {
      margin-top: 20px;
      font-size: 20px;
      color: #6F6868;
    }

    div {
      margin-top: 20px;
      display: flex;
      justify-content: left;
      margin-bottom: 40px;
      align-items: left;

      span{
        font-weight: bold;
        font-size: 36px;
        margin: 0 10px;
      }

      svg {
        background: #DBDBDB;
        border-radius: 20px;
        cursor: pointer;
        width: 40px;
        height: 40px;
      }

  
    }
  }
  @media(max-width: 900px){
    flex-direction: column;
    align-items: center;
    img{
      margin: 0 0;
    }
    div{
      margin: 0 auto;
    }
    p{
      text-align: center;
    }
  }
`;