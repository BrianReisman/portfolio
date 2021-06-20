import styled from "styled-components";

const StyledLogo = styled.div`
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 30px;
  /* margin: 10px 0 0 30px; */
  box-sizing: border-box;

  @media (max-width: ${(props) => props.theme.breakpoints.mid}) {
    position: absolute;
    top: 7px;
  }

  @media (min-width: 1441px) {
    position: relative;
    top: -10px;
    left: -380px;
  }
`;
export default StyledLogo;
