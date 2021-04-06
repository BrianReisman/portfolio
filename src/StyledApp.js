import styled from "styled-components";

const StyledApp = styled.div`
  /* border: 1px dashed red; */
  background-color: ${(props) => props.theme.color.white};
  font-family: ${(props) => props.theme.font.main};
  color: ${(props) => props.theme.color.black};
  max-width: 1440px;
  margin: 0 auto;

  /* global styles */
  p {
    font-size: ${(props) => props.theme.size.small};
  }
  a {
    text-decoration: none;
  }
  h1 {
    font-size: ${(props) => props.theme.size.h1};
  }
  h2 {
    font-size: ${(props) => props.theme.size.h2};
    position: relative;
    padding: 5px 0 0 0;
    letter-spacing: 5px;
  }
  h3 {
    font-size: ${(props) => props.theme.size.h3};
  }
`;
export default StyledApp;
