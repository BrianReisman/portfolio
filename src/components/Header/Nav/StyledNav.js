import styled from "styled-components";

const StyledNav = styled.nav`
  /*//*Changed this to padding of parent component position: relative; */
  /*//*^^ left: 100px; */
  /*//*^^ top: 25px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 410px; */
  width: 38%;

  a {
    font-size: ${(props) => props.theme.size.small};
    color: ${(props) => props.theme.color.orange};
  }

  .icons{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80px;
  }
`;
export default StyledNav;
