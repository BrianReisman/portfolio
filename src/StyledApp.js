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
    /* font-size: ${(props) => props.theme.size.small}; */
  }
  a {
    text-decoration: none;
  }
  h2 {
    font-size: min(${(props) => props.theme.size.h2}, 16vw);
    padding: 10px 0 25px 0;
    letter-spacing: 5px;
  }
  h3 {
    font-size: ${(props) => props.theme.size.h3};
  }
  h4 {
    font-size: ${(props) => props.theme.size.h4};
  }
  #overlay {
    position: fixed; //so it follows us everywhere
    opacity: 1;
    top: 0; //makes sure fills whole screen
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: none;
    /* transition: 200ms ease-in-out; */
  }
  #overlay.active {
    opacity: 1;
    pointer-events: all;
  }

  /* @media (max-width: 1024px) {
    p {
      font-size: ${(props) => props.theme.size.small1024};
    }
  } */
`;
export default StyledApp;
