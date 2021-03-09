import React from 'react';
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { Container, Menu, Contato, Local, Redes } from './styles';

const Footer = () => {
    return (
        <Container>
            <Menu>
                <h3> </h3>
                <ul>
                    <li>
                        <a href='/'> </a>
                    </li>
                    <li>
                        <a href='/'> </a>
                    </li>
                </ul>
            </Menu>
            <Contato>
                
                    
        </Contato>
            <Local>
                


                    <Redes>
                    Redes Sociais:
                        <ul>
                        <li>
                            <a href='/'>
                                <FaInstagram></FaInstagram>
                            </a>
                        </li>
                        <li>
                            <a href='/'>
                                <FaWhatsapp> </FaWhatsapp>
                            </a>
                        </li>
                        <li>
                            <a href='/'>
                                <FaFacebook></FaFacebook>
                            </a>
                        </li>
                    </ul>
                </Redes>
            </Local>

        </Container>
    )
};

export default Footer;