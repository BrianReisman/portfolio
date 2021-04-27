import styled from "styled-components";
// https://stackoverflow.com/questions/5209814/can-i-position-an-element-fixed-relative-to-parent //*With this I could need to move logo into App again...
const StyledLogo = styled.div`
  cursor: pointer;
  position: fixed;
  top: 10px;
  left: 30px;
  /* margin: 10px 0 0 30px; */
  box-sizing: border-box;

  @media (max-width: ${(props) => props.theme.breakpoints.mid}) {
    position: absolute;
    top: 7px;
  }

  @media (min-width: 1440px) {
    position: relative;
    top: -10px;
    left: -380px;
  }
`;
export default StyledLogo;
