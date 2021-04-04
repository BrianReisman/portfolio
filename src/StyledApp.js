import styled from "styled-components";

const StyledApp = styled.div`
  /* border: 1px solid tomato; */
  background-color: ${(props) => props.theme.color.white};
  font-family: ${(props) => props.theme.font.main};
  color: ${(props) => props.theme.color.black};
`;
export default StyledApp;
