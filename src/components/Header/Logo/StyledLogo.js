import styled from "styled-components";

const StyledLogo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: 10px 0 0 30px;
  box-sizing: border-box;

  @media (max-width: ${(props) => props.theme.breakpoints.mid}) {
    position: absolute;
  }
`;
export default StyledLogo;
