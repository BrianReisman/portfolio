import styled from "styled-components";

const StyledSpacer = styled.div`
  background-color: ${(props) => props.theme.color.transition};
  height: 50px;
  box-sizing: border-box;
  padding-left: 100px;

  /* added for footer only */
  display: flex;
  align-items: center;
  p {
    font-size: 1.6rem;
    font-family: Consolas, "courier new";
    color: crimson;
    text-align: center;
    margin: 0 auto;
    font-size: 1.2rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mid}) {
    height: 30px;
    padding-left: 15px;
  }
`;
export default StyledSpacer;
