import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #FF6B00;
  width: 30%;
  height: 30px;
  border: 10;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 50;
  color: black;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background: ${shade(0.2, '#FF6B00')}
  }


`;