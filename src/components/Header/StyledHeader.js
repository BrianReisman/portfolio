import styled from 'styled-components';

const StyledHeader = styled.header`
  /* border: 1px solid black; */
  /* height: 10vh; */

  background-color: ${(props) => props.theme.color.white};
  padding-top: 20px;
  padding-bottom: 15px;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between; //! not working
  align-items: center;
`;
export default StyledHeader;
