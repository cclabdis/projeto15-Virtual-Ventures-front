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

  .products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;

    .product {
      background-color: white;
      border-radius: 0.5rem;
      padding: 1rem;
      box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);

      img {
        max-width: 100%;
        height: auto;
      }

      h3 {
        font-size: 1.5rem;
        margin-top: 1rem;
      }

      p {
        font-size: 1rem;
        color: #666;
        margin-top: 0.5rem;
      }
    }
  }
`;