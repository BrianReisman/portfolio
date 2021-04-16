import styled from "styled-components";

const StyledShort = styled.div`
  /* border: 1px solid red; */

  background-color: ${(props) => props.theme.color.white};
  max-width: 600px;
  box-shadow: -32px 29px 110px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  ul p {
    font-size: 1.8rem;
  }
  ul li,
  ul li a {
    font-size: 2rem;
  }
  ul li {
    padding-left: 16px;
    margin: 20px 0;
    font-style: italic;
  }
  li a {
    color: ${(props) => props.theme.color.orange};
  }
`;
export default StyledShort;
