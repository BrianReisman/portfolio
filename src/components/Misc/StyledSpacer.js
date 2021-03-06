import styled from "styled-components";

const StyledSpacer = styled.div`
  background-color: ${(props) => props.theme.color.transition};
  height: 50px;
  box-sizing: border-box;
  padding-left: 100px;

  @media (max-width: ${(props) => props.theme.breakpoints.mid}) {
    height: 30px;
    padding-left: 15px;
  }
`;
export default StyledSpacer;
