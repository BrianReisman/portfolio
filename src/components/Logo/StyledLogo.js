import styled from "styled-components";

const StyledLogo = styled.div`
  position: fixed;
  margin: 20px 0 0 30px;
  box-sizing: border-box;

  @media (max-width: ${props => props.theme.breakpoints.mid}){
    display: none;
  }
`;
export default StyledLogo;
