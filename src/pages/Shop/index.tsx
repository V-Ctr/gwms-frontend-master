import React from 'react';
import { Container, ProductsContainer } from './styles';
//import MostWanted from '../../components/MostWanted';
//import Filter from '../../components/Filter';
import Item from '../../components/Item';
//import products from '../../data/products.json'

const Shop = () => {

    return (
        <Container>
            <h1> </h1>
            
            <h2> </h2>
            <div className="products">
                
                <ProductsContainer>
                    {(product => (
                        <Item
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            src={product.src}
                            price={product.price} />
                    ))}
                    {(product => (
                        <Item
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            src={product.src}
                            price={product.price} />
                    ))}
                </ProductsContainer>
            </div>
        </Container>
    )
}

export default Shop;