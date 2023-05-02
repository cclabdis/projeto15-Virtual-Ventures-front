import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  color: #0077cc;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
`;

export const CartList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  max-width: 400px;
`;

export const ItemName = styled.span`
  font-weight: bold;
`;

export const RemoveButton = styled.button`
  border: none;
  background-color: #f44336;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const EmailInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export const CheckoutButton = styled.button`
  border: #0077cc;
  background-color: #fff;
  color: #0077cc;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #0077cc;
  }
`;

export const Message = styled.p`
  font-size: 18px;
  margin-top: 20px;
`;