import React from 'react';
import { Container, ProductWrapper, ProductList } from './HomePage.styled';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    const products = [
      { id: 1, image:'https://cdn.folhabv.com.br/images/noti-1656700912.webp' ,name: 'Produto 1', price: 10 },
      { id: 2, image:'https://cdn.folhabv.com.br/images/noti-1656700912.webp' ,name: 'Produto 1', price: 10 },
      { id: 3, image:'https://cdn.folhabv.com.br/images/noti-1656700912.webp' ,name: 'Produto 1', price: 10 },
      { id: 4, image:'https://cdn.folhabv.com.br/images/noti-1656700912.webp' ,name: 'Produto 1', price: 10 },
      { id: 5, image:'https://cdn.folhabv.com.br/images/noti-1656700912.webp' ,name: 'Produto 1', price: 10 },
      { id: 6, image:'https://cdn.folhabv.com.br/images/noti-1656700912.webp' ,name: 'Produto 1', price: 10 },
      { id: 7, image:'https://cdn.folhabv.com.br/images/noti-1656700912.webp' ,name: 'Produto 1', price: 10 },
      { id: 8, image:'https://cdn.folhabv.com.br/images/noti-1656700912.webp' ,name: 'Produto 1', price: 10 },
      { id: 9, image:'https://cdn.folhabv.com.br/images/noti-1656700912.webp' ,name: 'Produto 1', price: 10 },
      { id: 10, image:'https://cdn.folhabv.com.br/images/noti-1656700912.webp' ,name: 'Produto 1', price: 10 },
      { id: 11, image:'https://cdn.folhabv.com.br/images/noti-1656700912.webp' ,name: 'Produto 1', price: 10 },
      
    ];
    this.setState({ products });
  }

  render() {
    const { products } = this.state;

    return (
        <Container>
            <div>
                <h1>Bem-vindo à Virtual Ventures!</h1>
                <p>Aqui estão todos os nossos produtos:</p>
                <ProductList>
                {products.map(product => (
                    <ProductWrapper key={product.id}>
                      <img src={product.image} alt={product.name} />
                      <h2>{product.name}</h2>
                      <p>Preço: R${product.price}</p>
                    </ProductWrapper>
                  ))} 
                </ProductList>
               
            </div>
      </Container>
    );
  }
}

export default HomePage;