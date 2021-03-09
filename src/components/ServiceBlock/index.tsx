import React from 'react';
import { Container, TitleContainer, ServicesContainer, Contact } from './styles';
import { FiPhone } from 'react-icons/fi';
import ServiceCell from '../ServiceCell';
import groomService from '../../assets/service1.png'
import showerService from '../../assets/showerService.png';
import trainingService from '../../assets/trainingService.png';
import vetService from '../../assets/vetService.png';
const ServiceBlock = () => {

  return (
    <Container id='service'>
      <TitleContainer>
        <strong> </strong>
        <Contact>
          <FiPhone />
          <span>(11)  </span>
        </Contact>

        <Contact>
          <FiPhone />
          <span>(11)  </span>
        </Contact>

      </TitleContainer>
      <ServicesContainer>

        <ServiceCell
          image={groomService}
          title="Monitoramento"
        >
          
        </ServiceCell>
        <ServiceCell
          image={showerService}
          title=" "
        >
          
        </ServiceCell>
        <ServiceCell
          image={trainingService}
          title=" "
        >
          
        </ServiceCell>
        <ServiceCell
          image={vetService}
          title=" "
        >
          
        </ServiceCell>
      </ServicesContainer>
    </Container>
  );
}

export default ServiceBlock;