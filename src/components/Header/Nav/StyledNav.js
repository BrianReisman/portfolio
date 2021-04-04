import styled from "styled-components";

const StyledNav = styled.nav`
  /* border: 1px solid blue; */
  margin: 25px 0px 0px 110px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 410px;

  a {
    font-size: ${(props) => props.theme.size.small};
    color: ${(props) => props.theme.color.orange};
    text-decoration: none;
    list-style-type: none;
  }
`;
export default StyledNav;
