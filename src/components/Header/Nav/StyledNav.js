import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  border: 1px solid blue;
  width: 50%;
  /* flex-direction: column; */
  a {
    font-size: ${props => props.theme.size.small};
    text-decoration: none;
    list-style-type: none;
  }
`;
export default StyledNav;
