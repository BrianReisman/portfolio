import styled from "styled-components";

const StyledApp = styled.div`
  /* border: 1px dashed red; */

  background-color: ${(props) => props.theme.color.white};
  font-family: ${(props) => props.theme.font.main};
  color: ${(props) => props.theme.color.black};

  max-width: 1440px; //controls screens to the upside
  margin: 0 auto; //and centers the 1440px frame
  /* padding: 0 20px 0 0; //right padding app wide */

  /* global styles */
  p {
    font-size: ${(props) => props.theme.size.small};
  }
  a {
    text-decoration: none;
  }
  h2 {
    font-size: min(${(props) => props.theme.size.h2}, 16vw);
    position: relative;
    padding: 5px 0 25px 0;
    letter-spacing: 5px;
  }
  h3 {
    font-size: ${(props) => props.theme.size.h3};
  }
  h4 {
    font-size: ${(props) => props.theme.size.h4};
  }

  @media (max-width: 1024px) {
    p {
      font-size: ${(props) => props.theme.size.small1024};
    }
  }
`;
export default StyledApp;
