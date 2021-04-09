import styled from "styled-components";

const StyledNav = styled.nav`
border: 1px solid blue;
  /*//*Changed this to padding of parent component position: relative; */
  /*//*^^ left: 100px; */
  /*//*^^ top: 25px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* min-width: 40%; */
  min-width: 550px;

  padding: 0 15px;
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

  /* @media(max-width: 768px){ */
  @media(max-width: 1025px){
    min-width: 100%;
  }
`;
export default StyledNav;
