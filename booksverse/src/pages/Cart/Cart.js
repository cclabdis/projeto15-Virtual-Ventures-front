//Carrinho: deve ser possível ver os produtos/serviços que foram adicionados no carrinho de compras 
//(ou seja, posso comprar mais de um produto/contratar mais de um serviço ao mesmo tempo). 
import React, { Component } from 'react';
import {
    CartItem, 
    CartList, 
    CheckoutButton, 
    CheckoutContainer, 
    ItemName, 
    RemoveButton, 
    EmailInput, 
    } from './Cart.styled'

    class Checkout extends Component {
        constructor(props) {
          super(props);
          this.state = {
            cart: [], 
            email: '', 
            purchaseCompleted: false // Flag indicando se a compra foi concluída
          };
        }

        addToCart = (item) => {
          this.setState(prevState => ({
            cart: [...prevState.cart, item]
          }));
        }
      
        removeFromCart = (item) => {
          this.setState(prevState => ({
            cart: prevState.cart.filter(i => i !== item)
          }));
        }
      
        sendEmail = () => {
          const { cart, email } = this.state;
      
          let body = '';
          cart.forEach(item => {
            body += `${item.name}: $${item.price}\n`;
          });
      
         console.log(`Enviando email para ${email} com a seguinte lista de compras:\n${body}`);
      
          this.setState({ purchaseCompleted: true });
        }
      
        render() {
          const { cart, email, purchaseCompleted } = this.state;
      
          return (
            <CheckoutContainer>
              <h1>Checkout</h1>
      
              <CartList>
                {cart.map(item => (
                  <CartItem key={item.name}>
                    <ItemName>{item.name}</ItemName>
                    <span>${item.price}</span>
                    <RemoveButton onClick={() => this.removeFromCart(item)}>X</RemoveButton>
                  </CartItem>
                ))}
              </CartList>
      
              <EmailInput
                type="email"
                placeholder="Informe seu email"
                value={email}
                onChange={(e) => this.setState({ email: e.target.value })}
                />

                <CheckoutButton onClick={this.sendEmail}>Finalizar compra</CheckoutButton>

                {purchaseCompleted && <p>Obrigada pela compra!</p>}
                </CheckoutContainer>
                );

            }
        }
        
        export default Checkout;