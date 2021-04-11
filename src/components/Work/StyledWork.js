import styled from "styled-components";

// ! h2 styles are located in StyledApp.js

const StyledWork = styled.div`
  border: 3px solid tomato;
  padding: 0px 15px 70px 100px; //TODO: use on all section
  background-color: ${(props) => props.theme.color.background};
`;

export default StyledWork;
