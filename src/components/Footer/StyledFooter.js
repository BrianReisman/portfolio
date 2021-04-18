import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.color.transition};
  height: 50px;
  box-sizing: border-box;
  padding-left: 100px;

  display: flex;
  align-items: center;

  p,
  a {
    font-size: 1.2rem;
    font-family: Consolas, "courier new";
    text-align: center;
    margin: 0 auto;
  }
  p {
    color: crimson;
  }
  a {
    color: ${(props) => props.theme.color.purple};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mid}) {
    height: 30px;
    padding-left: 15px;
  }
`;
export default StyledFooter;
