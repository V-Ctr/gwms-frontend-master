import styled, {keyframes} from 'styled-components';
import LoginImage from '../../assets/full3.webp';

const Animation = keyframes`
  from {
    margin-left: 50px;
  }
  to {
    margin-left: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  overflow:hidden;
  height: 100vh;

  max-width: 1150px;
  
`;

export const FormContainer = styled.div`

  animation: ${Animation} 1s;
  /*margin: 15% 0 0 0; */
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 50%;
  max-width: 600px;
  text-align: left;

  strong {
    color: #63bcff;
    font-size: 36px;
    margin-bottom: 80px;
  }

  button {
    margin-bottom: 80px;
    width: 320px;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 18px;
  }

  hr {
    width: 440px;
    margin: 80px 0;
    border: 0,5px solid black;
  }

  form {
    width: 320px;
    text-align: left;

    
  }
`;

export const ImageContainer = styled.div`
  background: url(${LoginImage}) no-repeat center;
  
  flex: 1;
`;