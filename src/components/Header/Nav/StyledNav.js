import styled from "styled-components";

const StyledNav = styled.nav`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-self: center;

  a {
    padding: 0 min(25px, 3vw);
    font-size: min(${(props) => props.theme.size.small}, 3.5vw);
    color: ${(props) => props.theme.color.orange};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mid}) {
    display: none;
  }
`;
export default StyledNav;
