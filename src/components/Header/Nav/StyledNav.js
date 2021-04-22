import styled from "styled-components";

const StyledNav = styled.nav`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-self: center;

  a,
  button {
    padding: 0 min(25px, 3vw);
    font-size: min(${(props) => props.theme.size.small}, 3.5vw);
    color: ${(props) => props.theme.color.orange};
    outline: none;
    border: none;
    cursor: pointer;
    background-color: ${(props) => props.theme.color.white};
  }

  a{
    color: ${(props) => props.theme.color.purple};
    ::after{
      /* border: 1px solid black; */
      align-self: flex-start;
      font-size: 16px;
      content: '↗'
    }
  }

`;
export default StyledNav;
