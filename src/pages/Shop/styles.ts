import styled from 'styled-components';

export const Container = styled.div`
    margin: 50px 5px;
    text-align: center;
    
    h1 {
        color: #aeb1b3;
        margin-bottom: 40px;
        font-size: 40px;
    }

    h2 {
        color: #aeb1b3;
        margin-bottom: 10px;
        font-size: 40px;
    }

    .products {
        display: flex;
        @media(max-width: 300px){
            flex-direction: column;
            align-items: center;
        }
    }
`;

export const ProductsContainer = styled.div`
    max-width: 800px;
    margin-center: 500px;
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
`;