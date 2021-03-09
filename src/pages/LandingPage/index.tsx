import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TitleContainer, Container, Banner, Dog, About, Info } from './styles';
//import ServiceBlock from '../../components/ServiceBlock';
//import MostWanted from '../../components/MostWanted';
//import Newsletter from '../../components/Newsletter';
import bannerDesktop from '../../assets/full3.webp';
import bannerMobile from '../../assets/cachorroLarFeliz.jpg'

const Home = () => {

    return (
        <>
            <TitleContainer>
                <Banner>
                    <a href="http://localhost:3000/">
                        <picture>
                            <source media='(max-width: 700px)' srcSet={bannerDesktop} />
                            <img src={bannerMobile} alt="Banner" />
                        </picture>
                    </a>
                </Banner>
            </TitleContainer>
            
            
            <Info>
                
                <About>
                    <h1> </h1>
                         .<br />
                </About>
            </Info>
        </>
    )
}

export default Home