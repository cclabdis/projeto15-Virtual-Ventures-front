import React from 'react';
import { Container } from './HomePage.styled';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    const products = [
      { id: 1, name: 'Produto 1', price: 10 },
      { id: 2, name: 'Produto 2', price: 20 },
      { id: 3, name: 'Produto 3', price: 30 }
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
                <ul>
                {products.map(product => (
                    <li key={product.id}>
                    {/* <img>{product.img}</img> */}
                    <h2>{product.name}</h2>
                    <p>Preço: R${product.price}</p>
                    
                    </li>
                ))}
                </ul>
            </div>
      </Container>
    );
  }
}

export default HomePage;