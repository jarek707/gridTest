import styled from 'styled-components';

const GridContainer = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  @media only screen and (max-width: 720px) {
    flex-wrap: wrap;
    li {
      flex: 1;
      background-color: lightgreen;
      min-width: 34%;
    }
  }
  @media only screen and (max-width: 560px) {
    flex-direction: column;
    li {
      background-color: lightblue;
    }
  }
}
`;

const Box = styled.li`
  list-style: none;
  flex:1;
  border: 1px solid black;
  padding: 1rem;
  input {
    border: 1px solid #ddd;
    padding: 0.5rem;
    width: 3rem;
    border-radius: 0.5rem;
  }
`;

const errorMsgCss = `
  .errorMessage {
      min-height: 3rem;
      color: red;
      padding-top: 1rem;
  }
`;

export {
  GridContainer,
  Box,
  errorMsgCss
};
