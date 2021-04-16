import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.color.purple};
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.size.small};
  padding: 10px;
  border-radius: 8px;

  /* //!!the button click is weird */
  outline: none;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
export default StyledButton;
