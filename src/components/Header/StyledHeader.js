import styled from 'styled-components';

const StyledHeader = styled.header`
  /* border: 1px solid black; */
  /* height: 10vh; */

  top: 0;
  background-color: ${(props) => props.theme.color.white};
  padding-top: 20px;
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: stretch;

  border: 1px solid black;

`;
export default StyledHeader;
