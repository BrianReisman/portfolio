import styled from "styled-components";

const StyledShort = styled.div`
  /* border: 1px solid red;
  *{
  border: 1px solid black;
  } */

  background-color: ${(props) => props.theme.color.white};
  max-width: 600px;
  box-shadow: -32px 29px 110px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  ul p {
    font-size: 1.8rem;
    /* border-left: 5px solid ${props => props.theme.color.orange}; */
    /* padding-left: 5px; */
    /* line-height: 30px; */
    font-weight: bold;
  }
  ul li,
  ul li a {
    font-size: 2.2rem;
    letter-spacing: 1px;
    line-height: 2.6rem
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
