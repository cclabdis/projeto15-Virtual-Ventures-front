import styled from 'styled-components';

export const Container = styled.div`
  background-color: #c4d7c7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 1rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        margin-bottom: 5px;
      }

  .products {
    .product {
      background-color: white;
      border-radius: 0.5rem;
      padding: 1rem;
  
      h3 {
        font-size: 10px;
        margin-bottom: 5px;
      }

      p {
        font-size: 14px;
        color: #666;
      }
    }
  }
`;

export const ProductWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;`

  export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
`;